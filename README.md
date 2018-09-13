# Plug'n'play sample app

This app showcase a wide range of popular packages, and show that Plug'n'play has no issue working with them. Feel free to open PRs to add more, even if they would make little sense in a classic application!

## Usage

Running `yarn install` in the root directory will automatically use the Plug'n'Play-enabled build checked inside the repository. To try out the project without Plug'n'Play enabled, just run `YARN_PLUGNPLAY_OVERRIDE=0 yarn install` instead.

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

## Known Issues

  - ESLint doesn't work w/ eslint-plugin-import because of https://github.com/babel/babel-eslint/issues/680
