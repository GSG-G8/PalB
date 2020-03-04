const routes = require('express').Router();

const {
  home, getPost, getUsers, addPost, addUsers,
} = require('../controllers/index');

routes.get('/home', home);
routes.get('/posts', getPost);
routes.use('/login', getUsers);
routes.post('/signup', addUsers);
routes.post('/createPost', addPost);


module.exports = routes;
