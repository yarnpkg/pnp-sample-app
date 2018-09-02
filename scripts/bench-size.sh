#!/usr/bin/env bash

export YARN_PLUGNPLAY_OVERRIDE=false
./yarn.js install  >/dev/null
./yarn.js build    >/dev/null

echo Before:
ls -lh ./dist/app.js

export YARN_PLUGNPLAY_OVERRIDE=true
./yarn.js install  >/dev/null
./yarn.js build    >/dev/null

echo After:
ls -lh ./dist/app.js
