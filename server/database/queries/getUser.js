const connection = require('../config/connection');

const getUser = (value) => connection.query('select * from users where email = $1 and password = $2', [value.email, value.password]);
const checkUser = (value) => connection.query('select * from users where email = $1', [value.email]);

module.exports = {
  getUser,
  checkUser,
};
