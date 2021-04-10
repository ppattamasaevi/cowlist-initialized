const express = require('express')
const bodyParser = require('body-parser');
const { saveOne, getAll } = require('../db/model.js');


const app = express()
const port = 3003

app.use(express.static('./client/dist'))
app.use(bodyParser.json())

app.get('/cows', (req, res) => {
  getAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log('Failed to getAll cows from DB', err);
    });
});

app.post('/cows', (req, res) => {
  const params = [...req.body];
  console.log('/////params/////', params);
  saveOne(params)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log('Failed to save new cow in DB', err);
    });
});



app.listen(port, () => console.log(`Server listening on port ${port}`))