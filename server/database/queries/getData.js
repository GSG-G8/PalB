const connection = require('../config/connection');

const getPosts = () => connection.query('select * from posts order by id desc');

module.exports = getPosts;
