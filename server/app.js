require('env2')('./config.env');
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const router = require('./router');
const { clientError, serverError } = require('./controllers/errors');

const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 5595);

app.use(router);

app.use(clientError);
app.use(serverError);

module.exports = app;
