module.exports = {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    server: {
      enhanceMiddleware: (middleware) => {
        return (req, res, next) => {
          req.headers['cache-control'] = 'no-store';
          middleware(req, res, next);
        };
      },
    },
  };