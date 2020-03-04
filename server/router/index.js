
const routes = require('express').Router();

const {
  home, getPost, getUsers, addPost, addUsers,
} = require('../controllers/index');

routes.get('/home', home);
routes.get('/users', getUsers);
routes.get('/posts', getPost);
routes.post('/login', addUsers);
routes.post('/signup', addPost);


module.exports = routes;
