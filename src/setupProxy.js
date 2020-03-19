const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/meiju22', {
        target: "https://www.meiju22.com",
        pathRewrite: {'^/meiju22': ''},
        changeOrigin: true
    }));
    
    app.use(createProxyMiddleware('/hanjutv', {
        target: "https://www.hanjutv.com",
        pathRewrite: {'^/hanjutv': ''},
        changeOrigin: true
    }));

    app.use(createProxyMiddleware('/wfrmyy', {
        target: "http://www.wfrmyy.com",
        pathRewrite: {'^/wfrmyy': ''},
        changeOrigin: true
    }));
};