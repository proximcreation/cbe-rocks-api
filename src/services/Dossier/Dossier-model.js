'use strict';

// Dossier-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DossierSchema = new Schema({
  //porteur
  //action
  listePorteur: [{
    type: Schema.Types.ObjectId,
    ref: 'Porteur',
    required: false,
  }],
  listeAction: [{
    type: Schema.Types.ObjectId,
    ref: 'Action',
    required: false,
  }],
  dateCreationDossier: { type: Date, required: false },
  dateCreationPrevu: { type: Date, required: false },
  motifCassation: { type: String, required: false },
  abandon: { type: Boolean, required: false },
  enseigne: { type: String, required: false },
  adress: { type: String, required: false },
  codePostal: { type: String, required: false },
  ville: { type: String, required: false },
  numFixe: { type: Number, required: false },
  numPortable: { type: Number, required: false },
  siteWeb: { type: String, required: false },
  dateCreation: { type: Date, required: false },
  siret: { type: String, required: false },
  nbrSalarie: { type: String, required: false },
  gerant: { type: String, required: false },


  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const DossierModel = mongoose.model('Dossier', DossierSchema);

module.exports = DossierModel;
