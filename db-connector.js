const fastifyPlugin = require('fastify-plugin')

async function dbConnector(fastify, options) {
    //fastify.register(require('fastify-postgres'), {
    //     connectionString: "postgres://dfotppexlqphxr:7dc4a1ec44559bab4e401e2c36ab3e384baa1bfd76a6cf95ee008551c820fa85@ec2-54-156-60-12.compute-1.amazonaws.com:5432/ddkbf5uk00camd",
    //     ssl: {
    //         rejectUnauthorized: false
    //     }
    // });

    fastify.register(require('fastify-postgres'), {
        connectionString: "postgres://test:test@localhost:5432/indian_banks"
      });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators    
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector)