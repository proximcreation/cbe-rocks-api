'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('Dossier service', function() {
  it('registered the Dossiers service', () => {
    assert.ok(app.service('Dossiers'));
  });
});
