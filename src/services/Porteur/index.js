'use strict';

const service = require('feathers-mongoose');
const Porteur = require('./Porteur-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: Porteur,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/Porteurs', service(options));

  // Get our initialize service to that we can bind hooks
  const PorteurService = app.service('/Porteurs');

  // Set up our before hooks
  PorteurService.before(hooks.before);

  // Set up our after hooks
  PorteurService.after(hooks.after);
};
