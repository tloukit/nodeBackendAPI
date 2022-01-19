const express = require('express');
const app = express();
const mongoose = require('mongoose');

const pollutionCityRoutes = require('./routes/pollutionCity');



//mongoose.connect('mongodb+srv://ylerroux:Panam75015@cluster0.hp7ow.mongodb.net/test?retryWrites=true&w=majority',
mongoose.connect('mongodb://localhost:27017/test',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
  
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
  
  
  // equivalent plus récent de body-parser
app.use(express.json());

app.use('/api/pollutionCity', pollutionCityRoutes);

module.exports = app;

  

