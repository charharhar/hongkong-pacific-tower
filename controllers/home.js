const path = require('path');
const appRootDir = require('app-root-dir');

// exports.index = (req, res, assetsMap) => {
//   res.render(path.resolve(appRootDir.get(), './views/index.html'), {
//     assetsMap: assetsMap,
//   });
// };

// For English, use these scripts
exports.index = (req, res, assetsMap) => {
  res.render(path.resolve(appRootDir.get(), './en/index.html'), {
    assetsMap: assetsMap,
  });
};

// For Mandarin, use these scripts
// exports.index = (req, res, assetsMap) => {
//   res.render(path.resolve(appRootDir.get(), './zh/index.html'), {
//     assetsMap: assetsMap,
//   });
// };
