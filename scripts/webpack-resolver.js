let pnp;

try {
  pnp = require(`../.pnp.js`);
} catch (error) {
  // not a problem
}

module.exports = {
  apply: function(resolver) {
    if (!pnp) {
      return;
    }

    const resolvedHook = resolver.ensureHook(`module`);
    resolver.getHook(`raw-module`).tapAsync(`PnpResolver`, (request, resolveContext, callback) => {
      let issuer;
      let resolution;

      // When using require.context, issuer seems to be false (cf https://github.com/webpack/webpack-dev-server/blob/d0725c98fb752d8c0b1e8c9067e526e22b5f5134/client-src/default/index.js#L94)
      if (!request.context.issuer) {
        issuer = `${request.path}/`;
      // Otherwise, if the issuer provided by Webpack is a valid absolute path, then we can use it as our issuer
      } else if (request.context.issuer.startsWith(`/`)) {
        issuer = request.context.issuer;
      } else {
        throw new Error(`Cannot successfully resolve this dependency`);
      }

      try {
        resolution = pnp.resolveToUnqualified(request.request, issuer);
      } catch (error) {
        return callback(error);
      }

      resolver.doResolve(
        resolvedHook,
        Object.assign({}, request, {
          path: resolution,
        }),
        null,
        resolveContext,
        callback,
      );
    });
  },
};
