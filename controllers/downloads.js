const path = require('path');
const appRootDir = require('app-root-dir');

// exports.index = (req, res, assetsMap) => {
//   res.render(path.resolve(appRootDir.get(), './views/downloads.html'), {
//     assetsMap: assetsMap,
//   });
// };

// For English, use these scripts
exports.index = (req, res, assetsMap) => {
  res.render(path.resolve(appRootDir.get(), './en/downloads.html'), {
    assetsMap: assetsMap,
  });
};

// For Mandarin, use these scripts
// exports.index = (req, res, assetsMap) => {
//   res.render(path.resolve(appRootDir.get(), './zh/downloads.html'), {
//     assetsMap: assetsMap,
//   });
// };
