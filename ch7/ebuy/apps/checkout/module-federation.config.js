// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'checkout',
  exposes: {
    './Module': './src/app/app.tsx',
  },
};

module.exports = moduleFederationConfig;
