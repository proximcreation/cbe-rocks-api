'use strict';

// Porteur-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PorteurSchema = new Schema({

  //situationSocial
  //indemnité
  listeAction: [{
    type: Schema.Types.ObjectId,
    ref: 'Actions',
    required: false,
  }],
  listeDossier: [{
    type: Schema.Types.ObjectId,
    ref: 'Dossiers',
    required: false,
  }],
  //PERSONNEL
  lastname: { type: String, required: false }, //ok
  firstname: {type: String, required: false }, //ok
  sexe: { type: String, required: false }, //ok
  birthDate: { type: Date, required: false }, //ok
  adress: { type: String, required: false }, //ok
  city: { type: String, required: false }, //ok
  zipCode: { type: Number, required: false }, //ok
  landLine: { type: Number, required: false }, //ok
  mobileNumber: { type: Number, required: false }, //ok
  fax: {type: String, required: false}, //ok
  email: {type: String, required: false}, //ok
  //situationFamiliale
  cotorep: { type: Boolean, required: false },
  dependentChild: { type: Number, required: false },//ok

  //PRO
  //formation
  formationDetail: { type: String, required: false },//ok
  //qualification
  anpeRegistrationDate : { type: Date, required : false },
  idANPE: { type: String, required: false },
  //indemnité
  experience: { type: Boolean, required: false },//ok
  nbrAnneeExperience: { type: Number, required: false },
  expDetail: { type: String, required: false },

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const PorteurModel = mongoose.model('Porteur', PorteurSchema);

module.exports = PorteurModel;
