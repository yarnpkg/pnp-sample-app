#!/usr/bin/env bash

export YARN_PLUGNPLAY_EXPERIMENTAL=false
./yarn.js install  >/dev/null
./yarn.js build    >/dev/null

echo Before:
ls -lh ./dist/app.js

export YARN_PLUGNPLAY_EXPERIMENTAL=true
./yarn.js install  >/dev/null
./yarn.js build    >/dev/null

echo After:
ls -lh ./dist/app.js
