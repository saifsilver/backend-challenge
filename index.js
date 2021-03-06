'use strict'

const server = require('./app')({
  logger: {
    level: 'info'
    // ,prettyPrint: true
  }
});

server.listen(process.env.PORT || 5000, '0.0.0.0', (err, address) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
})
