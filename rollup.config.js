const commonjs = require(`rollup-plugin-commonjs`);
const resolve = require(`rollup-plugin-pnp-resolve`);

module.exports = {
  input: `sources/fibonacci.js`,
  output: {
    file: `dist/fibonacci-as-lib.js`,
    format: `cjs`,
  },
  plugins: [
    commonjs(),
    resolve(),
  ]
};
