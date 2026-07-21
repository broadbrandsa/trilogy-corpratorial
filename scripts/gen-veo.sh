#!/usr/bin/env bash
# Generate subtle cinemagraph loops from the editorial stills via Veo 3.1
# (Vertex AI image-to-video, same start+end frame for a seamless loop), then
# optimise for web with ffmpeg. Outputs to public/video/.
#
# Usage: bash scripts/gen-veo.sh [id ...]   (no args = all)
set -uo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/public/img"
OUTV="$ROOT/public/video"
TMP="$ROOT/.veo-tmp"
mkdir -p "$OUTV" "$TMP"

PROJECT="ageless-period-474319-e0"
REGION="us-central1"
MODEL="veo-3.1-generate-001"
GCLOUD="/opt/homebrew/bin/gcloud"
DUR=6
BASE="https://${REGION}-aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/${REGION}/publishers/google/models/${MODEL}"

COMMON="No text or captions. No people entering or leaving frame. No fast motion, no zoom cuts. Subtle, premium, calm. Seamless loop."

# id | source image | aspect (16:9|9:16) | prompt
read -r -d '' MANIFEST <<EOF
hero|hero-fem.png|16:9|Subtle cinemagraph. Static camera with a very slow 2 percent push-in. The woman breathes gently and blinks once; the android's green eye-light and rim light pulse softly. Faint atmospheric haze in the dark. ${COMMON}
offer-bpo|offer-bpo.png|9:16|Subtle cinemagraph. Static camera. The green monitor glow flickers and breathes softly, faint screen light shifts across the dark contact-centre floor. Agents almost still. ${COMMON}
offer-gcc|offer-gcc.png|9:16|Static camera. The team actively collaborates around the glowing green holographic building floorplate: they gesture and point at the plan, one person reaches out to adjust a section, heads turn and nod as they discuss, natural hand and body movement throughout. The hologram shimmers and pulses. Faint dust motes drift in the dark fit-out space. Purposeful and alive. ${COMMON}
offer-ai|offer-ai.png|9:16|Subtle cinemagraph. Static camera. The single green point of light pulses and glows softly between the human and robotic hands; faint particle drift around it. Hands almost still. ${COMMON}
cape-town|cape-town.jpg|16:9|Subtle cinemagraph. Very slow 2 percent camera push-in. White clouds drift slowly across the clear blue sky behind the mountain; faint heat shimmer over the city skyline. ${COMMON}
EOF

prep_image() {
  local src="$1" aspect="$2" out="$3"
  if [ "$aspect" = "16:9" ]; then
    ffmpeg -y -loglevel error -i "$src" \
      -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080" \
      -q:v 4 "$out"
  else
    # 9:16 canvas, fit width, pad top/bottom black (#0A0A0A) to match brand
    ffmpeg -y -loglevel error -i "$src" \
      -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:color=0x0A0A0A" \
      -q:v 4 "$out"
  fi
}

submit() {
  # build the request body in a file (base64 is too large for an inline arg)
  local id="$1" prompt="$2" jpg="$3" aspect="$4" token="$5"
  local req="$TMP/$id.req.json"
  PROMPT="$prompt" ASPECT="$aspect" DUR="$DUR" JPG="$jpg" python3 - "$req" <<'PY'
import os, sys, json, base64
req = sys.argv[1]
b64 = base64.b64encode(open(os.environ["JPG"], "rb").read()).decode()
img = {"bytesBase64Encoded": b64, "mimeType": "image/jpeg"}
body = {
    "instances": [{"prompt": os.environ["PROMPT"], "image": img, "lastFrame": img}],
    "parameters": {
        "aspectRatio": os.environ["ASPECT"],
        "sampleCount": 1,
        "durationSeconds": int(os.environ["DUR"]),
        "generateAudio": False,
    },
}
json.dump(body, open(req, "w"))
PY
  curl -s -X POST -H "Authorization: Bearer $token" -H "Content-Type: application/json" \
    "${BASE}:predictLongRunning" -d @"$req"
}

IDS=("$@")
TOKEN=$($GCLOUD auth print-access-token)

# ---- submit all ----
declare -A OP ASPECT
while IFS='|' read -r id src aspect prompt; do
  [ -z "$id" ] && continue
  if [ ${#IDS[@]} -gt 0 ] && [[ ! " ${IDS[*]} " =~ " $id " ]]; then continue; fi
  echo "→ prep $id ($aspect)"
  rm -f "$TMP/$id.raw.mp4" "$TMP/$id.result.json"   # avoid re-using a stale clip on failure
  prep_image "$IMG/$src" "$aspect" "$TMP/$id.jpg"
  echo "→ submit $id"
  resp=$(submit "$id" "$prompt" "$TMP/$id.jpg" "$aspect" "$TOKEN")
  op=$(echo "$resp" | python3 -c "import sys,json;print(json.load(sys.stdin).get('name',''))" 2>/dev/null)
  if [ -z "$op" ]; then echo "  submit failed: $(echo "$resp" | head -c 300)"; continue; fi
  OP[$id]="$op"; ASPECT[$id]="$aspect"
  echo "  op: ${op##*/}"
done <<< "$MANIFEST"

[ ${#OP[@]} -eq 0 ] && { echo "no operations submitted"; exit 1; }

# ---- poll + save + optimise ----
for id in "${!OP[@]}"; do
  op="${OP[$id]}"; aspect="${ASPECT[$id]}"
  echo "⧖ polling $id"
  for i in $(seq 1 90); do
    TOKEN=$($GCLOUD auth print-access-token)
    res=$(curl -s -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
      "${BASE}:fetchPredictOperation" -d "{\"operationName\":\"$op\"}")
    done_f=$(echo "$res" | python3 -c "import sys,json;d=json.load(sys.stdin);print('done' if d.get('done') else 'pending')" 2>/dev/null)
    if [ "$done_f" = "done" ]; then
      echo "$res" > "$TMP/$id.result.json"
      python3 -c "
import json,base64
d=json.load(open('$TMP/$id.result.json'))
vs=d.get('response',{}).get('videos',[])
if not vs:
    print('  NO VIDEO:', json.dumps(d)[:300]); raise SystemExit
raw=base64.b64decode(vs[0]['bytesBase64Encoded'])
open('$TMP/$id.raw.mp4','wb').write(raw)
print(f'  saved raw {len(raw)/1e6:.1f}MB')
"
      if [ -f "$TMP/$id.raw.mp4" ]; then
        if [ "$aspect" = "16:9" ]; then SC="1920:1080"; else SC="1080:1920"; fi
        ffmpeg -y -loglevel error -i "$TMP/$id.raw.mp4" \
          -vf "scale=$SC" -c:v libx264 -crf 30 -preset slow -an \
          -movflags +faststart -pix_fmt yuv420p "$OUTV/$id.mp4"
        echo "  → public/video/$id.mp4 ($(du -h "$OUTV/$id.mp4" | cut -f1))"
      fi
      break
    fi
    sleep 10
  done
done
echo "DONE"
