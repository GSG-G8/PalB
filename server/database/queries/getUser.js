const connection = require('../config/connection');

const getUser = () => connection.query('select * from users');

module.exports = getUser;
