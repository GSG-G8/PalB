const connection = require('../config/connection');


const addPosts = (data) => connection.query('INSERT INTO posts (post_title,user_id,post_content,post_img) values ($1, $2, $3, $4) returning *', [data.post_title, data.user_id, data.post_content, data.post_img]);

module.exports = addPosts;
