var express = require('express');
var data = require('../data/user');

var router = express.Router();

router.get('/', async function(req, res, next) {
  if(req.session.username && await data.userExists(req.session.username)) {
    res.render('user_dash', { username: req.session.username });
  } else {
    req.session.username = null;

    res.redirect('user/login');
  }
});

router.get('/login', function(req, res, next) {
  res.render('user_login');
});

router.post('/login', async function(req, res, next) {
  if(await data.userExists(req.body.username)) {
    req.session.username = req.body.username;
  } 

  res.redirect('/user');
});

router.get('/logout', function(req, res, next) {
  req.session.username = null;

  res.redirect('/');
});

module.exports = router;
