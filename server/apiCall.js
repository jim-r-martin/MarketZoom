const axios = require('axios');
const apiHost = 'https://api.iextrading.com/1.0';

const apiCall = (symbol, res) => {
  axios.get(`${apiHost}/stock/${symbol}/chart/1d?chartInterval=5`)
    .then(promise => promise)
    .then(response => {
      const { data } = response;
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
};

module.exports = apiCall;