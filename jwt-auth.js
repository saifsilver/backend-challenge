const fastifyPlugin = require('fastify-plugin')

async function initJWT(fastify, options) {
    fastify.register(require('fastify-jwt'), {
        secret: 'secret123'
    })

    fastify.decorate("authenticate", async (request, reply) => {
        try {
            await request.jwtVerify()
        } catch (err) {
            reply.send(err)
        }
    });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators    
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(initJWT)