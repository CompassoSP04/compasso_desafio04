const EmployeeRepository = require('../repository/EmployeeRepository')
class EmployeeService {
    create(payload) {
        const result = EmployeeRepository.create(payload)
        return result
    }
}
module.exports = new EmployeeService()