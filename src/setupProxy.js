
const proxy = require('http-proxy-middleware');

const serverUrl = process.env.AppEnvironment
  ? `http://${process.env.AppEnvironment}`
  : 'http://localhost:8080';

const mcdProxySettings = {
  target: serverUrl,
  changeOrigin: true,
  logLevel: 'debug',
  // onProxyReq: (proxyReq, req, res) => {
  // },
  onError: (err, req, res) => {
    console.error(err);
    res.status(500);
    res.json({ error: 'Error when connecting to remote server.' });
  },
};

module.exports = function (app) {
    app.use(proxy('/api', mcdProxySettings)); // can use glob!
};
