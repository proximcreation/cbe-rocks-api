'use strict';

// Action-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActionSchema = new Schema({

  //TypeAction
  //CodePrestation
  //conseiller
  //affectationProjet

  dossier: {
    type: Schema.Types.ObjectId,
    ref: 'Dossier',
    required: false,
  },

  listePorteur: [{
    type: Schema.Types.ObjectId,
    ref: 'Porteur',
    required: false,
  }],
  refDossier: { type: String, required: true },
  dateAction: { type: Date, required: true },
  commentaire: { type: String, required: true },
  tempspasse: { type: Number, required: true },



  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const ActionModel = mongoose.model('Action', ActionSchema);

module.exports = ActionModel;
