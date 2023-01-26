"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const characters_1 = __importDefault(require("./routes/characters"));
const express = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(body_parser_1.default.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(characters_1.default);
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path_1.default.join(__dirname, 'public') });
});
mongoose_1.default
    .connect(process.env.MONGODB_CONNECT_URI)
    .then(() => {
    app.listen(process.env.PORT || 3000);
})
    .catch((err) => {
    console.log(err);
});
