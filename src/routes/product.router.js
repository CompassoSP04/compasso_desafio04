const ProductController = require('../app/controllers/ProductController')

module.exports = (server, routes, prefix = '/api/v1/product') => {
    routes.post('/', ProductController.create)

    server.use(prefix, routes);



}