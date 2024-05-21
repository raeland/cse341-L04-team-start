const routes = require('express').Router()
const temple = require('./temple')
//const swaggerUi = require('swagger-ui-express')
//const swaggerDocument = require('./swagger.json')

//router.use('/api-docs', swaggerUi.serve)
//router.get('/api-docs', swaggerUi.setup(swaggerDocument))

routes.use('/', require('./swagger'))
routes.use('/temples', temple)
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
    }
    res.send(docData)
  })
)

module.exports = routes
