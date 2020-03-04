const { join } = require('path');
const { getPosts } = require('../database/queries/getData');
const { getUser } = require('../database/queries/getUser');
const { addPosts } = require('../database/queries/postData');
const { addUser } = require('../database/queries/postUser');


const home = (req, res) => res.sendFile(join(__dirname, '..', '..', 'public', 'home.html'));


const getPost = (req, res, next) => getPosts().then((data) => {
  res.json(data.rows);
}).catch((err) => {
  next(err);
});

const getUsers = (req, res, next) => getUser().then((data) => {
  res.json(data.rows);
}).catch((err) => {
  next(err);
});

const addPost = (req, res, next) => addPosts(req.body).then((data) => {
  res.json(data.rows[0]);
}).catch((err) => {
  next(err);
});

const addUsers = (req, res, next) => addUser(req.body).then((data) => {
  res.json(data.rows[0]);
}).catch((err) => {
  next(err);
});

module.exports = {
  home,
  getPost,
  getUsers,
  addPost,
  addUsers,
};
