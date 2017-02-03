'use strict';

// inscrit-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inscritSchema = new Schema({
  reason: { type: String, required: false }, //ok
  dateRDV: { type: Date, required: false }, //ok
  lastname: { type: String, required: false }, //ok
  firstname: {type: String, required: false }, //ok
  sexe: { type: String, required: false }, //ok
  birthDate: { type: Date, required: false }, //ok
  adress: { type: String, required: false }, //ok
  city: { type: String, required: false }, //ok
  zipCode: { type: Number, required: false }, //ok
  landLine: { type: Number, required: false }, //ok
  mobileNumber: { type: Number, required: false }, //ok
  email: {type: String, required: false}, //ok
  familySituation: { type: String, required: false }, //ok
  dependentChild: { type: Number, required: false },//ok
  disabledWorker: { type: String, required: false }, //ok
  schoolCurriculum: { type: String, required: false }, //ok
  diplome: { type: String, required: false }, //ok Mais desactiver si sans diplome checked
  experience: { type: String, required: false },
  job: { type: String, required: false },
  socialSituation: {
    active : { type: Boolean, default : false },
    student : { type: Boolean, default : false },
    retired : { type: Boolean, default : false },
    jobSeeker : { type: Boolean, default : false },
    anpeRegistered : { type: Boolean, default : false },
    anpeRegistrationDate : { type: Date },
    ARE : { type: Boolean, default : false },
    ASS : { type: Boolean, default : false },
    RMI : { type: Boolean, default : false },
    notCompensated : { type: Boolean, default : false },
    other : { type: String, default : '' }
  },










  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const inscritModel = mongoose.model('inscrit', inscritSchema);

module.exports = inscritModel;
