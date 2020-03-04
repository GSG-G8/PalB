const connection = require('../config/connection');


const addPosts = (data) => {
  console.log(data);
  return connection.query('INSERT INTO posts (post_title,user_id,post_content,post_img) values ($1, $2, $3, $4) returning *', [data.post_title, '1', data.post_content, data.post_img]); // Till we complete our website the user_is should be 1
};
module.exports = addPosts;
