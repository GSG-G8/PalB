require('env2')('./config.env');
const path = require('path');
const express = require('express');

const app = express();

app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));


app.set('port', process.env.PORT || 5595);


app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', 'public', 'errors', '404.html'));
});


app.use((err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', 'public', 'errors', '500.html'));
});


module.exports = app;
