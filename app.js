'use strict'

// Require the framework and instantiate it
const fastify = require('fastify')

function build(opts={}) {
  const app = fastify(opts)
  app.register(require('./db-connector'))
  app.register(require('./jwt-auth'))
  app.register(require('./routes/v1/pages'))
  app.register(require('./routes/v1/users'), { prefix: '/v1' })
  app.register(require('./routes/v1/banks'), { prefix: '/v1' })
  return app
}

module.exports = build