'use strict';

const service = require('feathers-mongoose');
const Action = require('./Action-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: Action,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/Actions', service(options));

  // Get our initialize service to that we can bind hooks
  const ActionService = app.service('/Actions');

  // Set up our before hooks
  ActionService.before(hooks.before);

  // Set up our after hooks
  ActionService.after(hooks.after);
};
