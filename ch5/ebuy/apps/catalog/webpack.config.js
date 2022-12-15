const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');

const defaultConfig = {
  ...baseConfig,
};

module.exports = withModuleFederation(defaultConfig);
