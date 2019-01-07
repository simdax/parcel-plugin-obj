const { Asset } = require('parcel-bundler');

module.exports = class OBJAsset extends Asset {

  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
  }

  generate() {
    return { js: `module.exports = \`${ this.contents }\`` };
  }

};
