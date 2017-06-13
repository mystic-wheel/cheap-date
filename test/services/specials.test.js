const assert = require('assert')
const app = require('../../src/app')

describe('\'specials\' service', () => {
  it('registered the service', () => {
    const service = app.service('specials')

    assert.ok(service, 'Registered the service')
  })
})
