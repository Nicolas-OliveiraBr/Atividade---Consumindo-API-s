var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const message = response.data;
    console.log(message);

    res.render('index', { 
      title: 'Mensagem do dia:',
      message
    });
  } catch(e) {
    console.log('Erro ao buscar mensagem.');
  }
});

module.exports = router;
