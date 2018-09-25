const {relative, resolve} = require(`path`);

const pnp = require(process.argv[2] || `pnpapi`);
const packageNameMaps = {path_prefix: `/`, packages: {}, scopes: {}};

function traverseDependencyTree(pnp, cb) {
  const traversed = new Set();

  function traversePackage(locator) {
    const packageInformation = pnp.getPackageInformation(locator);

    // Skip packages that haven't been installed
    if (!packageInformation.packageLocation)
      return;

    // Skip packages that have already been traversed
    if (traversed.has(packageInformation))
      return;

    traversed.add(packageInformation);
    cb(locator, packageInformation);

    for (const [name, reference] of packageInformation.packageDependencies.entries()) {
      traversePackage({name, reference});
    }
  }

  traversePackage(pnp.topLevel);
}

function addPackages(pnp, packages, parentInformation, parentDependencies) {
  for (const [name, reference] of parentDependencies.entries()) {
    const dependencyInformation = pnp.getPackageInformation({name, reference});
    const dependencyLocation = dependencyInformation.packageLocation;

    if (!dependencyLocation)
      continue;

    const path = relative(parentInformation.packageLocation, dependencyLocation) || `./`;
    const pkgJson = require(resolve(dependencyLocation, `package.json`));
    const main = pkgJson.browser || pkgJson.main;

    packages[name] = {path, main};
  }
}

const topLevelInformation = pnp.getPackageInformation(pnp.topLevel);

traverseDependencyTree(pnp, (locator, packageInformation, packageDependencies) => {
  if (locator.name === null)
    return addPackages(pnp, packageNameMaps.packages, topLevelInformation, packageDependencies);

  const scope = relative(topLevelInformation.packageLocation, packageInformation.packageLocation);
  packageNameMaps.scopes[scope] = {packages:{}};

  addPackages(pnp, packageNameMaps.scopes[scope].packages, packageInformation, packageDependencies);
});

console.log(JSON.stringify(packageNameMaps, null, 2));
