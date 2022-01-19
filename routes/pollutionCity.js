const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

//mongoose model
const PollutionCity = require('../models/PollutionCity');

const pollutionCityCtrl = require('../controllers/pollutionCity');

// recuperation 1 enregistrement ( = 1 collection)
//router.get('/:id',stuffCtrl.getOneThing);
  
// recuperation plusieurs enregistrements ( = plusieurs collections)
router.get('/', pollutionCityCtrl.getAllPollutionCities);

// creation 1 enregistrement
//router.post('/', stuffCtrl.createThing);

// modification 1 enregistrement par son id
//router.put('/:id', stuffCtrl.modifyThing);

// supression d'un enregistrement par son id
//router.delete('/:id',stuffCtrl.deleteThing);

module.exports = router;