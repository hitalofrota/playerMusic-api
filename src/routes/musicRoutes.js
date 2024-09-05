const express = require('express');
const MusicsController = require('../constrollers/SongsController');

const router = express.Router();    

router.get('/songs', MusicsController.listSongs);
router.get('/play/:song', MusicsController.playSongs);

module.exports = router;
