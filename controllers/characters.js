const Character = require('../models/character');

exports.getCharacters = (req, res, next) => {
  Character.find()
    .then((characters) => {
      res.status(200).json({
        characters: characters,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
