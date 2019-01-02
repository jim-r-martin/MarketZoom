const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const apiCall = require('./apiCall');

const app = express();


app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 3003;

app.listen(port, (err) => {
  if (err) {
    return console.log(`error connection to port ${port}`);
  }
  return console.log(`listening at port ${port}`);
});

app.get('/stock/:symbol/price', (req, res) => {
  const { symbol } = req.params;
  apiCall(symbol, res);
});