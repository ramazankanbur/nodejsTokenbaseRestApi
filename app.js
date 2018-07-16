const express = require('express');
const routes = require('./routes');
const middleware = require('./util/middleware');
const urlApiPrefix = require('./util/config');

const app = express();

middleware(app);
routes(app, urlApiPrefix.coreConfig.apiUrlPrifix);

module.exports = app;
