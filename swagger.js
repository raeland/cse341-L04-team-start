const swaggerAutogen = require('swagger-autogen')()
const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
//const swaggerDocument = require('./swagger.json')

const doc = {
    info: {
        title: 'My API',
        description: 'Temple API',
    },
    //host: 'localhost:8080',
    host: 'cse341-4bnb.onrender.com',
    schemes:['http', 'https'],
}

const outputFile = './swagger.json'
const endpointFiles = ['./routes/index.js']

//generate swagger.json
swaggerAutogen(outputFile, endpointFiles, doc)

// run server after it gets generated 
// swaggerAutogen{outputFile, endpointFiles, doc}.then(async () => {
// await import('./index.js')
// })