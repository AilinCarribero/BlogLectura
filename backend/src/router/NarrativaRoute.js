const express = require('express');
const router = express.Router();

const { listenNarrativas } = require('../controllers/NarrativaController');

router.get('/listen', listenNarrativas);
//router.post('/new');

module.exports = router;