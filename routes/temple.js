const routes = require('express').Router()
//const swaggerUi = require('swagger-ui-express')
//const swaggerDocument = require('./swagger.json')
const temples = require('../controllers/temple.js')

//routes.use('/api-docs', swaggerUi.serve)
//routes.get('/api-docs', swaggerUi.setup(swaggerDocument))

routes.get('/', temples.findAll)
routes.get('/:temple_id', temples.findOne)

routes.post('/', temples.create)

module.exports = routes
