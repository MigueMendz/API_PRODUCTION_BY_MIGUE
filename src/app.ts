import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Im migue version 1');
});

app.get('/about', (req, res) => {
    res.send('About me');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});