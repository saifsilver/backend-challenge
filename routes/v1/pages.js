module.exports = function (fastify, opts, next) {
    fastify.get('/', async (request, reply) => {
        reply.status(200).send(`Started`);
    });

    next()
}