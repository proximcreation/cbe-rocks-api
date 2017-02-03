'use strict';

const service = require('feathers-mongoose');
const put = require('./put-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: put,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/puts', service(options));

  // Get our initialize service to that we can bind hooks
  const putService = app.service('/puts');

  // Set up our before hooks
  putService.before(hooks.before);

  // Set up our after hooks
  putService.after(hooks.after);
};
