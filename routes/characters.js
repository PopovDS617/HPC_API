const express = require('express');

const router = express.Router();

const charactersController = require('../controllers/characters');

router.route('/characters').get(charactersController.getCharacters);

module.exports = router;
