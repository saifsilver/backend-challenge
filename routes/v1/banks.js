module.exports = function (fastify, opts, next) {
    fastify.get('/banks/:ifsc', {
        preValidation: [fastify.authenticate]
    }, async (req, reply) => {
        const client = await fastify.pg.connect()
        const { rows } = await client.query('SELECT * FROM bank_branches WHERE ifsc = $1', [req.params.ifsc])
        client.release()
        return rows;
    });

    fastify.post('/list-branches', {
        preValidation: [fastify.authenticate]
    }, async (req, reply) => {
        const { bank_name, city, page, limit } = req.body
        const offset = (page - 1) * limit;
        const client = await fastify.pg.connect()
        const { rows } = await client.query('SELECT * FROM bank_branches WHERE bank_name = $1 AND city = $2 LIMIT $3 OFFSET $4', [bank_name, city, limit, offset])
        client.release()
        return rows;
    });

    const schema = {
        params: {
          type: 'object',
          properties: {
            bank_name: { type: 'string' },
            city: { type: 'string' },
            page: { type: 'number' },
            limit: { type: 'number' }
          }
        },
        headers: {
            type: 'object',
            properties: {
                'Authorization': { type: 'string' }
            },
            required: ['Authorization']
        }
    }

    fastify.get('/list-branches/:bank_name/:city/:page/:limit', {
        schema,
        preValidation: [fastify.authenticate]
    }, async (req, reply) => {
        const { bank_name, city, page, limit } = req.params
        const offset = (page - 1) * limit;
        const client = await fastify.pg.connect()
        const { rows } = await client.query('SELECT * FROM bank_branches WHERE bank_name = $1 AND city = $2 LIMIT $3 OFFSET $4', [bank_name, city, limit, offset])
        client.release()
        return rows;
    });
    next()
}