"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacters = void 0;
const character_1 = __importDefault(require("../models/character"));
const getCharacters = (req, res, next) => {
    character_1.default.find()
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
exports.getCharacters = getCharacters;
