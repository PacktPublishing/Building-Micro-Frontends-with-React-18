// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'app-shell',
  remotes: ['catalog', 'checkout', 'recommendations', 'store'],
  exposes: {},
};

module.exports = moduleFederationConfig;
