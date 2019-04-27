# Plug'n'play sample app

This app showcase a wide range of popular packages, and show that Plug'n'play has no issue working with them and how it enable ["Zero Install"](https://yarnpkg.github.io/berry/features/zero-installs) on Yarn 2! Feel free to open PRs to add more, even if they would make little sense in a classic application!

## Usage

Pull this repo, and check whether running yarn test (or any other script inlcuded in this repo) works without having to install any dependency.

## Plugins

A few plugins are needed for various build tools to properly understand how to resolve files. Those are the ones we use:

  - [rollup-plugin-pnp-resolve](https://github.com/arcanis/rollup-plugin-pnp-resolve)
  - [pnp-webpack-plugin](https://github.com/arcanis/pnp-webpack-plugin)

## Packages

The packages currently configured are:

  - Babel
  - ESLint
  - Gulp
  - Http-server
  - Jest
  - Prettier
  - React
  - Uglifyjs
  - Webpack
  - Webpack-dev-server

## Known Issues

  - ESLint doesn't work w/ eslint-plugin-import because of https://github.com/babel/babel-eslint/issues/680