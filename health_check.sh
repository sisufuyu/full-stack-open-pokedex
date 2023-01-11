#!bin/bash
res=$(curl https://fullstackopen-cicd-pokedex.fly.dev/health)
if [[ $res == 'ok' ]]; then
  exit 0
else
  exit 1
fi