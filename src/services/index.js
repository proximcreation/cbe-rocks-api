'use strict';
const action = require('./Action');
const porteur = require('./Porteur');
const dossier = require('./Dossier');
const inscrit = require('./inscrit');
const put = require('./put');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(put);
  app.configure(inscrit);
  app.configure(dossier);
  app.configure(porteur);
  app.configure(action);
};
