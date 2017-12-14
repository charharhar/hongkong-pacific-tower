const path = require('path');
const appRootDir = require('app-root-dir');

exports.index = (req, res, assetsMap) => {
  res.render(path.resolve(appRootDir.get(), './views/about.html'), {
    assetsMap: assetsMap,
  });
};
