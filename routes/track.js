var express = require('express');
var artistData = require('../data/artist');
var trackData = require('../data/track');

var router = express.Router();

router.get('/', async function(req, res, next) {
  res.render('track_search', { tracks: await trackData.getTracksWithArtist({})});
});

router.post('/', async function(req, res, next) {
  if(req.body.artist_query) {
    if(req.session.artist_id && await artistData.getArtist(req.session.artist_id)) {
      res.status(200).json(await trackData.getTracks({ artist_id: req.session.artist_id }));
    } else {
      res.status(400).json({ message: 'Invalid artist session' });
    }
  } else {
    res.status(200).json(await trackData.getTracks({}));
  }
});

router.get('/:artist_id/:title', async function(req, res, next) {
  let track;

  if(req.params.title && req.params.artist_id && (track = await trackData.getTracks({ title: req.params.title, artist_id: req.params.artist_id })) && track.length === 1) {
    res.render('track_info', { ...track[0], can_update: req.session.artist_id === track[0].artist_id });
  } else {
    res.status(404).render('error', { message: 'Track does not exist' });
  }
});

router.post('/:artist_id/:title', async function(req, res, next) {
  if(req.session.artist_id && await artistData.getArtist(req.session.artist_id)) {
    let newTrack, oldTrack;

    if(req.params.title && (oldTrack = await trackData.getTracks({ title: req.params.title, artist_id: req.session.artist_id })) && oldTrack.length === 1) {
      newTrack = {
        title: oldTrack[0].title,
        artist_id: oldTrack[0].artist_id,
        genre: req.body.genre || oldTrack[0].genre,
        length: req.body.length || oldTrack[0].length,
        explicitness: req.body.is_explicit || oldTrack[0].explicitness
      };

      if(await trackData.updateTrack(newTrack, req.params.title, req.session.artist_id)) {
        res.render('track_info', { ...newTrack, can_update: req.session.artist_id === newTrack.artist_id });
      } else {
        res.render('track_info', { ...oldTrack, message: 'Could not update track', can_update: req.session.artist_id === oldTrack.artist_id });
      }
    } else {
      res.status(404).render('error', { message: 'Could not find track' });
    }
  } else {
    req.session.artist_id = null;

    res.redirect('/artist/login');
  }
});

router.post('/create', async function(req, res, next) {
  let artist;

  if(req.session.artist_id && (artist = await artistData.getArtist(req.session.artist_id))) {
    if(await trackData.createTrack(req.body.title, req.session.artist_id, req.body.genre, req.body.length, req.body.is_explicit)) {
      res.render('artist_dash', { ...artist, message: `Created track ${req.body.title}`});
    } else {
      res.render('artist_dash', { ...artist, message: `Could not create track ${req.body.title}`});
    }
  } else {
    req.session.artist_id = null;

    res.redirect('/artist/login');
  }
});

router.post('/delete', async function(req, res, next) {
  let artist;

  if(req.body.title && req.session.artist_id && (artist = await artistData.getArtist(req.session.artist_id))) {
    if(await trackData.deleteTrack(req.body.title, req.session.artist_id)) {
      res.render('artist_dash', { ...artist, message: `Deleted track ${req.body.title}`});
    } else {
      res.render('artist_dash', { ...artist, message: `Could not delete track ${req.body.title}`});
    }
  } else {
    req.session.artist_id = null;

    res.redirect('/artist/login');
  }
});

module.exports = router;