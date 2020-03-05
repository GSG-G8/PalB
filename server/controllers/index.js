const { join } = require('path');
const Joi = require('@hapi/joi');

const getPosts = require('../database/queries/getData');
const { getUser, getAllUser, checkUser } = require('../database/queries/getUser');
const addPosts = require('../database/queries/postData');
const addUser = require('../database/queries/postUser');


const home = (req, res) => {
  if (req.cookies.name) {
    res.sendFile(join(__dirname, '..', '..', 'public', 'home.html'));
  } else {
    res.send('UnAuthorized');
  }
};


const getPost = (req, res, next) => getPosts().then((data) => {
  res.json(data.rows);
}).catch((err) => {
  next(err);
});

const getUsers = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^\w{6,}$/).required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.send('Please check the input values');
  } else {
    getUser(value).then(({ rows }) => {
      // console.log(value);
      res.cookie('name', rows[0].name).redirect('/home');
    }).catch((err) => { next(err); });
  }
};

const getAllUsers = (req, res, next) => {
  getAllUser().then((result) => res.json(result.rows));
};

const addPost = (req, res, next) => addPosts(req.body).then(() => res.redirect('/home')).catch((err) => {
  next(err);
});

const addUsers = (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(20)
      .required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^\w{6,}$/).required(),
    confirm: Joi.ref('password'),
    avatar: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.send('Please check the input values');
  } else {
    checkUser(value).then(({ rows }) => {
      if (rows.length !== 0) res.send('Email is already exist');
      else {
        addUser(value).then(({ rows }) => {
          res.cookie('name', rows[0].name).redirect('/home');
        }).catch((err) => { next(err); });
      }
    });
  }
};
const logout = (req, res) => {
  res.clearCookie('name').redirect('/');
};
module.exports = {
  home,
  getPost,
  getUsers,
  addPost,
  addUsers,
  getAllUsers,
  logout,
};
