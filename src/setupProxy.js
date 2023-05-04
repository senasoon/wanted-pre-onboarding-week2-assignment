const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxyConfig = {
  API: {
    target: process.env.REACT_APP_API_URL,
    changeOrigin: true,
  },
};

module.exports = function (app) {
  app.use('/api/v1/search-conditions', createProxyMiddleware(apiProxyConfig.API));
};
