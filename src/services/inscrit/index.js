'use strict';

const service = require('feathers-mongoose');
const inscrit = require('./inscrit-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: inscrit,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/inscrits', service(options));

  // Get our initialize service to that we can bind hooks
  const inscritService = app.service('/inscrits');

  // Set up our before hooks
  inscritService.before(hooks.before);

  // Set up our after hooks
  inscritService.after(hooks.after);
};
