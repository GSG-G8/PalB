
const routes = require('express').Router();

const {
  home, getPost, getUsers, addPost, addUsers,
} = require('../controllers/index');

routes.get('/home', home);
routes.get('/posts', getPost);
routes.post('/login', getUsers);
routes.post('/signup', addUsers);
routes.post('/createPost', addPost);


module.exports = routes;
