const path = require('path');
const appRootDir = require('app-root-dir');

exports.index = (req, res, assetsMap) => {
  res.render(path.resolve(appRootDir.get(), './views/innovative.html'), {
    assetsMap: assetsMap,
  });
};
