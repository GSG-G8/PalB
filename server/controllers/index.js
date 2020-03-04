const { join } = require('path');
const Joi = require('@hapi/joi');

const getPosts = require('../database/queries/getData');
const { getUser, checkUser } = require('../database/queries/getUser');
const addPosts = require('../database/queries/postData');
const addUser = require('../database/queries/postUser');


const home = (req, res) => res.sendFile(join(__dirname, '..', '..', 'public', 'home.html'));


const getPost = (req, res, next) => getPosts().then((data) => {
  res.json(data.rows);
}).catch((err) => {
  next(err);
});

const getUsers = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)^\w{6,}$/).required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.send(error.message);
  } else {
    getUser(value).then(({ rows }) => {
      res.cookie('name', rows[0].name).redirect('/');
    }).catch((err) => { next(err); });
  }
};

const addPost = (req, res, next) => addPosts(req.body).then(() => res.redirect('/home')).catch((err) => {
  next(err);
});

const addUsers = (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(20)
      .required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)^\w{6,}$/).required(),
    confirm: Joi.ref('password'),
    avatar: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.send(error.message);
  } else {
    checkUser(value).then(({ rows }) => {
      if (rows.length !== 0) res.send('Email is already exist');
      else {
        addUser(value).then(() => res.redirect('/')).catch((err) => { next(err); });
      }
    });
  }
};

module.exports = {
  home,
  getPost,
  getUsers,
  addPost,
  addUsers,
};
