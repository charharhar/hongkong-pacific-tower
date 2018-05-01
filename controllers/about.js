const path = require('path');
const appRootDir = require('app-root-dir');

// exports.index = (req, res, assetsMap) => {
//   res.render(path.resolve(appRootDir.get(), './views/about.html'), {
//     assetsMap: assetsMap,
//   });
// };

// For English, use these scripts
exports.index = (req, res, assetsMap) => {
  res.render(path.resolve(appRootDir.get(), './en/about.html'), {
    assetsMap: assetsMap,
  });
};

// For Mandarin, use these scripts
// exports.index = (req, res, assetsMap) => {
//   res.render(path.resolve(appRootDir.get(), './zh/about.html'), {
//     assetsMap: assetsMap,
//   });
// };
