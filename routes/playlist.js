var express = require('express');
var userData = require('../data/user');
var playlistData = require('../data/playlist');
var playlistTrackData = require('../data/playlistTrack');

var router = express.Router();

router.get('/', async function(req, res, next) {
  res.render('playlist_search', { playlists: await playlistData.getPlaylists({ public: 1 })});
});

router.post('/', async function(req, res, next) {
  if(req.body.user_query) {
    if(req.session.username && await userData.getUser(req.session.username)) {
      res.status(200).json(await playlistData.getPlaylists({ username: req.session.username }));
    } else {
      res.status(400).json({ message: 'Invalid user session' });
    }
  } else {
    res.status(200).json(await playlistData.getPlaylists({ public: 1 }));
  }
});

router.post('/create', async function(req, res, next) {
  let user;

  if(req.session.username && (user = await userData.getUser(req.session.username))) {
    if(await playlistData.createPlaylist(req.body.name, req.body.is_public, req.session.username)) {
      res.render('user_dash', { ...user, message: `Created playlist ${req.body.name}` });
    } else {
      res.render('user_dash', { ...user, message: `Could not create playlist ${req.body.name}` });
    }
  } else {
    req.session.username = null;

    res.redirect('/user/login');
  }
});

router.post('/delete', async function(req, res, next) {
  let user;

  if(req.session.username && (user = await userData.getUser(req.session.username))) {
    let playlist;

    if(req.body.playlist_id && (playlist = await playlistData.getPlaylists({ playlist_id: req.body.playlist_id, username: req.session.username })) && playlist.length === 1) {
        if(await playlistData.deletePlaylist(req.body.playlist_id)) {
          res.render('user_dash', { ...user, message: `Deleted playlist ${playlist[0].name}` });
        } else {
          res.render('user_dash', { ...user, message: `Could not delete playlist ${playlist[0].name}` });
        }
    } else {
      req.session.username = null;

      res.redirect('/user/login');
    }
  } else {
    req.session.username = null;

    res.redirect('/user/login');
  }
});

router.get('/:playlist_id', async function(req, res, next) {
  let playlist;

  if(req.params.playlist_id && (playlist = await playlistData.getPlaylists({ playlist_id: req.params.playlist_id })) && playlist.length === 1) {    
    let tracks = await playlistTrackData.getTracksInPlaylist({ playlist_id: playlist[0].playlist_id });

    res.render('playlist_info', { ...playlist[0], tracks: tracks, can_update: req.session.username === playlist[0].username });
  } else {
    res.status(404).render('error', { message: 'Playlist does not exist' });
  }
});

router.post('/:playlist_id', async function(req, res, next) {
  if(req.session.username && await userData.getUser(req.session.username)) {
    let newPlaylist, oldPlaylist;

    if(req.params.playlist_id && (oldPlaylist = await playlistData.getPlaylists({ playlist_id: req.params.playlist_id })) && oldPlaylist.length === 1) {
      newPlaylist = {
        playlist_id: oldPlaylist[0].playlist_id,
        username: oldPlaylist[0].username,
        name: req.body.name || oldPlaylist[0].name,
        public: req.body.is_public || oldPlaylist[0].public
      };

      if(await playlistData.updatePlaylist(newPlaylist, req.params.playlist_id)) {
        res.render('playlist_info', { ...newPlaylist, can_update: req.session.username === newPlaylist.username });
      } else {
        res.render('playlist_info', { ...oldPlaylist, message: 'Could not update playlist', can_update: req.session.username === oldPlaylist.username });
      }
    } else {
      res.status(404).render('error', { message: 'Could not find playlist' });
    }
  } else {
    req.session.username = null;

    res.redirect('/user/login');
  }
});

module.exports = router;