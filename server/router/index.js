const routes = require('express').Router();

const {
  home, getPost, getUsers, addPost, addUsers,getAllUsers
} = require('../controllers/index');

routes.get('/home', home);
routes.post('/posts', getPost);
routes.post('/login', getUsers);
routes.post('/getUsers', getAllUsers);
routes.post('/signup', addUsers);
routes.post('/createPost', addPost);


module.exports = routes;
