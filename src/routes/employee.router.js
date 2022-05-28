const EmployeeController = require('../app/controllers/EmployeeController')

module.exports = (server, routes, prefix='/api/v1/employee') => {
    routes
        .post('/', EmployeeController.create)
        .get('/', EmployeeController.list)
        .get('/:id', EmployeeController.getById)
        .put('/:id', EmployeeController.update)

    server.use(prefix, routes);

    

}