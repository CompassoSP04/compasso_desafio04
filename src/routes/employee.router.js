const EmployeeController = require('../app/controllers/EmployeeController')
const createValidation = require('../validation/employee/create')

module.exports = (server, routes, prefix='/api/v1/employee') => {

        routes.post('/', EmployeeController.create)
        routes.get('/', EmployeeController.list)
        routes.get('/:id', EmployeeController.getById)
        routes.put('/:id', EmployeeController.update)
        routes.delete('/:id', EmployeeController.delete)


    server.use(prefix, routes);

    

}