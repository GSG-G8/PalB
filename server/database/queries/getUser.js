const connection = require('../config/connection');

const getUser = (value) => connection.query('select * from users where name = $1 and password = $2', [value.name, value.password]);

module.exports = getUser;
