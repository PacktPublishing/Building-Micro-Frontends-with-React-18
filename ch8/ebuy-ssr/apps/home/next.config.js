const NextFederationPlugin = require("@module-federation/nextjs-mf");
const path = require("path");
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";

  const ENV = process.env.ENV;

  const CATALOG_URL_LOCAL = "http://localhost:3001";
  const CHECKOUT_URL_LOCAL = "http://localhost:3002";

  const CATALOG_URL_PROD = "http://<your-k8s-ip-address>";
  const CHECKOUT_URL_PROD = "http://<your-k8s-ip-address>";

  const CATALOG_REMOTE_HOST =
    ENV === "PROD" ? CATALOG_URL_PROD : CATALOG_URL_LOCAL;
  const CHECKOUT_REMOTE_HOST =
    ENV === "PROD" ? CHECKOUT_URL_PROD : CHECKOUT_URL_LOCAL;

  return {
    catalog: `catalog@${CATALOG_REMOTE_HOST}/_next/static/${location}/remoteEntry.js`,
    checkout: `checkout@${CHECKOUT_REMOTE_HOST}/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "home",
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};
