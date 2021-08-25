const fastifyPlugin = require('fastify-plugin')

async function dbConnector(fastify, options) {
    fastify.register(require('fastify-postgres'), {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators    
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector)