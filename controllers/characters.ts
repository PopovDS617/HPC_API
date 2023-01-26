import { NextFunction, Request, Response } from 'express';
import Character from '../models/character';

export const getCharacters = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
