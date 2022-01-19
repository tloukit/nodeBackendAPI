const PollutionCity = require ('../models/PollutionCity');

const mongoose = require('mongoose');

exports.getAllPollutionCities = (req, res, next) => {
    PollutionCity.find()
    .then(pollutionCities => res.status(200).json(pollutionCities))
    .catch(error => res.status(400).json({ error }));
};

/*exports.createThing = (req, res, next) => {
    delete req.body._id;
    const thing = new PollutionCity({
      ...req.body
    });
    thing.save()
    // IMPORTANT! => dans le then() on renvoit une reponse au front end sinon expiration de la requete 
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};*/

/*exports.modifyThing = (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.getOneThing =  (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
};
*/

// recuperation plusieurs enregistrements ( = plusieurs collections)
  /*app.get('/pollutioncities', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    PollutionCity.find()
    //.then(pollutioncities => res.status(200).json(pollutioncities))
    .then(pollutioncities => res)
    .catch(error => res.status(400).json({ error }));
  });*/
