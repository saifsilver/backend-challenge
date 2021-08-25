'use strict'

const build = require('./app')

// Test /
const test = async () => {
  const app = build()

  const response = await app.inject({
    method: 'GET',
    url: '/'
  })

  console.log('status code: ', response.statusCode)
  console.log('body: ', response.body)
}
test()

// Test /v1/login
const getJwtToken = async () => {
  const app = build()

  return await app.inject({
    method: 'POST',
    url: '/v1/login',
    body: {
      "username": "saif007",
      "password": "123456"
    }
  }).then(response => {
    return JSON.parse(response.payload).token
  })
}

// Test /v1/banks
const getBankTest = async () => {
  const app = build()
  const jwtToken = await getJwtToken()

  if (typeof jwtToken !== 'undefined') {
    const response = await app.inject({
      method: 'GET',
      url: '/v1/banks/SBIN0004722',
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      }
    })

    console.log('status code: ', response.statusCode)
    console.log('body: ', response.body)
  } else {
    console.log('token generation failed');
  }

}
getBankTest()


// Test /v1/list-branches
const getBranchesInCities = async () => {
  const app = build()
  const jwtToken = await getJwtToken()

  if (typeof jwtToken !== 'undefined') {
    const response = await app.inject({
      method: 'POST',
      url: '/v1/list-branches',
      body: {
          "bank_name": "STATE BANK OF INDIA",
          "city": "PALAKKAD",
          "page": "2",
          "limit": "3"
      },
      headers: {
        'Authorization': 'Bearer ' + jwtToken
      }
    })

    console.log('status code: ', response.statusCode)
    console.log('body: ', response.body)
  } else {
    console.log('token generation failed');
  }

}
getBranchesInCities()