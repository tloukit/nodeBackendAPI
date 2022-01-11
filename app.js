const express = require('express');
const app = express();
const mongoose = require('mongoose');

//mongoose model
const PollutionCity = require('./models/PollutionCity');

// equivalent plus récent de body-parser
app.use(express.json());


mongoose.connect('mongodb+srv://isikaal10:Naturel75!@cluster0.w7hnq.mongodb.net/air_quality_db?retryWrites=true&w=majority',

  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


/*app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });*/

  // recuperation 1 enregistrement ( = 1 collection)
 /*   app.get('/api/stuff/:id', (req, res, next) => {
      Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
    });
    */

  // recuperation plusieurs enregistrements ( = plusieurs collections)
  app.get('/pollutioncities', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    PollutionCity.find()
    .then(pollutioncities => res.status(200).json(pollutioncities))
    .catch(error => res.status(400).json({ error }));
  });


// creation 1 enregistrement
 /* app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
      ...req.body
    });
    thing.save()
    // IMPORTANT! => dans le then() on renvoit une reponse au front end sinon expiration de la requete 
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
  });

// modification 1 enregistrement par son id
  app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });

  // supression d'un enregistrement par son id
  app.delete('/api/stuff/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });*/



module.exports = app;