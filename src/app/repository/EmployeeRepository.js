const EmplooyeeSchema = require('../schema/EmployeeSchema')
class EmployeeRepository {
    create(payload) {
        return EmployeeSchema.create(payload);
    }
}

module.exports = new EmployeeRepository()