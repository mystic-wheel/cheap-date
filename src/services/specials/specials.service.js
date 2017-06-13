// Initializes the `specials` service on path `/specials`
const createService = require('feathers-nedb')
const createModel = require('../../models/specials.model')
const hooks = require('./specials.hooks')
const filters = require('./specials.filters')

module.exports = function() {
  const app = this
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'specials',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/specials', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('specials')

  service.hooks(hooks)

  if (service.filter) {
    service.filter(filters)
  }
}
