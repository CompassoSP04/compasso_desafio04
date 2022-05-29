const ProductController = require('../app/controllers/ProductController')

module.exports = (server, routes, prefix = '/api/v1/product') => {
    routes.post('/', ProductController.create)
    routes.get('/', ProductController.list) 


    server.use(prefix, routes);



}