import dotenv from 'dotenv';
import charactersRoutes from './routes/characters';
import express = require('express');
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(charactersRoutes);
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

mongoose
  .connect(process.env.MONGODB_CONNECT_URI as string)
  .then(() => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((err: Error) => {
    console.log(err);
  });
