module.exports = function (bundler) {
  bundler.addAssetType('obj', require.resolve('./obj-asset'));
};
