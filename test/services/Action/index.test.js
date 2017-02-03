'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('Action service', function() {
  it('registered the Actions service', () => {
    assert.ok(app.service('Actions'));
  });
});
