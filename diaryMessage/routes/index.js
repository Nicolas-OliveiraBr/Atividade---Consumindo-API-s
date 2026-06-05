var express = require('express');
var router = express.Router();
const axios = require('axios');

async function translator(msg) {
    const apiTranslator = await axios.get(`https://api.mymemory.translated.net/get?q=${msg}&langpair=en|pt-BR`); // Adicionei essa API de tradução pra português
    // console.log(apiTranslator);
    const translation = apiTranslator.data.responseData.translatedText
    // console.log(translation);
    return translation
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const apiMessage = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const originalMessage = apiMessage.data;
    const translatedMessage = await translator(originalMessage);
    res.render('index', { 
      title: 'Mensagem do dia:',
      translatedMessage,
      originalMessage
    });
  } catch(e) {
    console.log('Erro ao buscar mensagem.');
  }
});

module.exports = router;
