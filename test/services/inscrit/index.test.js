'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('inscrit service', function() {
  it('registered the inscrits service', () => {
    assert.ok(app.service('inscrits'));
  });
});
