module.exports = function (fastify, opts, next) {
    fastify.post('/login', (req, reply) => {
        const { username, password } = req.body;
        const token = fastify.jwt.sign({
            username,
            password,
            role: ['admin']
        }, {
            expiresIn: "5 days"
        });
        reply.send({
            token
        });
    });
    
    next()
}


// async function routes (fastify, options) {
//     const collection = fastify.mongo.db.collection('test_collection')
  
//     fastify.get('/', async (request, reply) => {
//       return { hello: 'world' }
//     })
  
//     fastify.get('/animals', async (request, reply) => {
//       const result = await collection.find().toArray()
//       if (result.length === 0) {
//         throw new Error('No documents found')
//       }
//       return result
//     })
  
//     fastify.get('/animals/:animal', async (request, reply) => {
//       const result = await collection.findOne({ animal: request.params.animal })
//       if (!result) {
//         throw new Error('Invalid value')
//       }
//       return result
//     })
//   }
  
//   module.exports = routes