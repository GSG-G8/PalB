const { join } = require('path');

const clientError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'errors', '404.html'));
};

const serverError = (err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'errors', '500.html'));
};

module.exports = {
  clientError,
  serverError,
};
