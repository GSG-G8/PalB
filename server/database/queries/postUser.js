const connection = require('../config/connection');


const addUser = (data, hash) => connection.query('INSERT INTO users (name, email, password, avatar) values ($1, $2, $3, $4) returning *', [data.name, data.email, hash, data.avatar]);

module.exports = addUser;
