#!/usr/bin/env bash

set -e

yarn
yarn webpack
yarn jest
yarn prettier
yarn rollup
yarn gulp
