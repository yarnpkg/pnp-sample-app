YARN_PLUGNPLAY_OVERRIDE=0 yarn && yarn webpack && cp dist/app.js /tmp/no-pnp.js
YARN_PLUGNPLAY_OVERRIDE=1 yarn && yarn webpack && cp dist/app.js /tmp/pnp.js

normalize() {
    sort | grep -v '__webpack_require__'
}

diff <(normalize < /tmp/no-pnp.js) <(normalize </tmp/pnp.js) > pnp.diff
