"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const characterSchema = new Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    house: { type: String, required: true },
    orderOfThePhoenix: { type: Boolean, required: true },
    dumbledoreArmy: { type: Boolean, required: true },
    deathEater: { type: Boolean, required: true },
    alias: { type: String, required: true },
    patronus: { type: String, required: true },
});
exports.default = mongoose_1.default.model('Character', characterSchema);
