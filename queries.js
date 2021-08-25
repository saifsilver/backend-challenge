
const getBankByIFSC = async (request, response) => {
    const client = await fastify.pg.connect()
    const { rows } = await client.query('SELECT * FROM bank_branches WHERE ifsc = $1', [req.params.ifsc])
    client.release()
    return rows;
}

const getBranchesByCityAndName = async (request, response) => {
    const { bank_name, city, page, limit } = req.body
    const offset = (page - 1) * limit;
    const client = await fastify.pg.connect()
    const { rows } = await client.query('SELECT * FROM bank_branches WHERE bank_name = $1 AND city = $2 LIMIT $3 OFFSET $4', [bank_name, city, limit, offset])
    client.release()
    return rows;
}

module.exports = {
    getBankByIFSC, getBranchesByCityAndName
}