let pnp;

try {
  pnp = require(`../.pnp.js`);
} catch (error) {
  // not a problem
}

const NOTFOUND = {found: false};

module.exports = {
  interfaceVersion: 2,
  resolve: (source, file) => {
    if (!pnp) {
      throw new Error(`This resolver is meant to be used with pnp, but no pnp file was found`);
    }

    try {
      return {found: true, path: pnp.resolveRequest(source, file)};
    } catch (error) {
      return NOTFOUND;
    }
  },
};
