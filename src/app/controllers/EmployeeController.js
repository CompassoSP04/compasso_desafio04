const EmployeeService = require('../service/EmployeeService')

class EmployeeController {
    create(req, res) {
        try {
            const result = EmployeeService.create(req.body)
            return  res.status(201).json(result)
        } catch(error) {
            return res.status(400).json(error)

        }
    }
}