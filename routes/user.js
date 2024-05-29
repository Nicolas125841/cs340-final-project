var express = require('express');
var data = require('../data/user');

var router = express.Router();

router.get('/', async function(req, res, next) {
  if(req.session.username && await data.getUser(req.session.username)) {
    res.render('user_dash', { username: req.session.username });
  } else {
    req.session.username = null;

    res.redirect('user/login');
  }
});

router.get('/register', function(req, res, next) {
  res.render('user_reg.hbs');
});

router.post('/register', async function(req, res, next) {
  if(await data.createUser(req.body.username, req.body.name)) {
    req.session.username = req.body.username;

    res.redirect('/user');
  } else {
    res.render('user_reg', { message: 'User already exists' });
  }
});

router.get('/login', function(req, res, next) {
  res.render('user_login');
});

router.post('/login', async function(req, res, next) {
  if(await data.getUser(req.body.username)) {
    req.session.username = req.body.username;

    res.redirect('/user');
  } else {
    res.render('user_login', { message: 'User not found' });
  }
});

router.get('/logout', function(req, res, next) {
  req.session.username = null;

  res.redirect('/user');
});

router.post('/remove', async function(req, res, next) {
  if(req.session.username && await data.deleteUser(req.session.username)) {
    req.session.username = null;

    res.redirect('/user');
  } else {
    res.render('user_dash', { username: req.session.username, message: 'Could not delete account' });
  }
});

module.exports = router;
