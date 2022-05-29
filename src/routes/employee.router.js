const EmployeeController = require('../app/controllers/EmployeeController')

module.exports = (server, routes, prefix='/api/v1/employee') => {
    routes.post('/', EmployeeController.create)

    server.use(prefix, routes);

    

}