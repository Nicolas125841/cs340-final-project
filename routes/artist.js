var express = require('express');
var data = require('../data/artist');

var router = express.Router();

router.get('/', async function(req, res, next) {
  let artist;

  if(req.session.artist_id && (artist = await data.getArtist(req.session.artist_id))) {
    res.render('artist_dash', artist);
  } else {
    req.session.artist_id = null;

    res.redirect('/artist/login');
  }
});

router.post('/', async function(req, res, next) {
  let oldArtist, newArtist;

  if(req.session.artist_id && (oldArtist = await data.getArtist(req.session.artist_id))) {
    newArtist = {
      artist_id: oldArtist.artist_id,
      name: req.body.name || oldArtist.name,
      join_date: oldArtist.join_date,
      producer: req.body.producer || oldArtist.producer
    };

    if(await data.updateArtist(newArtist, oldArtist.artist_id)) {
      req.session.artist_id = newArtist.artist_id;

      res.render('artist_dash', newArtist);
    } else {
      req.session.artist_id = oldArtist.artist_id;

      res.render('artist_dash', { ...oldArtist, message: 'Could not update info' });
    }
  } else {
    req.session.artist_id = null;

    res.redirect('/artist/login');
  }
});

router.get('/register', function(req, res, next) {
  res.render('artist_reg.hbs');
});

router.post('/register', async function(req, res, next) {
  let id;

  if((id = await data.createArtist(req.body.name, req.body.producer))) {
    req.session.artist_id = id;

    res.redirect('/artist');
  } else {
    res.render('artist_reg', { message: 'Artist account could not be created' });
  }
});

router.get('/login', function(req, res, next) {
  res.render('artist_login');
});

router.post('/login', async function(req, res, next) {
  if(await data.getArtist(req.body.artist_id)) {
    req.session.artist_id = req.body.artist_id;

    res.redirect('/artist');
  } else {
    res.render('artist_login', { message: 'Artist ID does not exist' });
  }
});

router.get('/logout', function(req, res, next) {
  req.session.artist_id = null;

  res.redirect('/artist');
});

router.post('/remove', async function(req, res, next) {
  if(req.session.artist_id && await data.deleteArtist(req.session.artist_id)) {
    req.session.artist_id = null;

    res.redirect('/artist');
  } else {
    res.render('artist_dash', { artist_id: req.session.artist_id, message: 'Could not delete account' });
  }
});

module.exports = router;