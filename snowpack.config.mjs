/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
    public: "/",
    src: "/dist",
  },
  plugins: [
    /* ... */
    "@snowpack/plugin-react-refresh",
    [
      "@snowpack/plugin-webpack",
      {
        /* see "Plugin Options" below */
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    baseUrl: "/react-snowpack-playground",
    out: "../docs",
  },
};
