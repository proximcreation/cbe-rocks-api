'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('put service', function() {
  it('registered the puts service', () => {
    assert.ok(app.service('puts'));
  });
});
