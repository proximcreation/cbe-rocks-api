'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('Porteur service', function() {
  it('registered the Porteurs service', () => {
    assert.ok(app.service('Porteurs'));
  });
});
