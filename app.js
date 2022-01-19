const express = require('express');
const app = express();
const mongoose = require('mongoose');

const pollutionCityRoutes = require('./routes/pollutionCity');

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PWD = process.env.MONGO_PWD;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;


mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PWD}@${MONGO_CLUSTER}?retryWrites=true&w=majority`,
//mongoose.connect('mongodb://localhost:27017/test',
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

  

