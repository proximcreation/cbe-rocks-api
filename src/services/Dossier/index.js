'use strict';

const service = require('feathers-mongoose');
const Dossier = require('./Dossier-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: Dossier,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/Dossiers', service(options));

  // Get our initialize service to that we can bind hooks
  const DossierService = app.service('/Dossiers');

  // Set up our before hooks
  DossierService.before(hooks.before);

  // Set up our after hooks
  DossierService.after(hooks.after);
};
