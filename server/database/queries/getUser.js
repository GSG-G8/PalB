const connection = require('../config/connection');

const getUser = (value) => connection.query('select * from users where email = $1 and password = $2', [value.email, value.password]);

module.exports = getUser;
