const express = require('express');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.post('/history', (req, res) => {
  db.save(req.body.input, req.body.output)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500))
});

app.get('/history', (req, res) => {
  db.retrieve()
    .then((history) => res.send(history))
    .catch(() => res.sendStatus(500))
});

app.delete('/history', (req, res) => {
  db.truncate()
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500))
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
