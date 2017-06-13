const specials = require('./specials/specials.service.js')
module.exports = function() {
  const app = this
  app.configure(specials)
}
