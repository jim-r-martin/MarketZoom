const axios = require('axios');
const apiHost = 'https://api.iextrading.com/1.0';

const apiCall = (symbol, res) => {
  console.log(symbol);
  axios.get(`${apiHost}/stock/${symbol}/chart/1d`)
    .then(response => response)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
};

module.exports = apiCall;