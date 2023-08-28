const NextFederationPlugin = require("@module-federation/nextjs-mf");
const path = require("path");
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  const ENV = process.env.ENV;

  const CATALOG_URL_LOCAL = "http://localhost:3001";

  const CATALOG_URL_PROD = "http:/<your-k8s-ip-address>/";

  const CATALOG_REMOTE_HOST =
    ENV === "PROD" ? CATALOG_URL_PROD : CATALOG_URL_LOCAL;

  return {
    catalog: `catalog@${CATALOG_REMOTE_HOST}/_next/static/${location}/remoteEntry.js`,
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
        name: "catalog",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Module": "./pages/index.tsx",
        },
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
