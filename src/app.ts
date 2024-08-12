import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Im migue version 1');
});