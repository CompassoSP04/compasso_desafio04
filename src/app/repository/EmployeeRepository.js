const EmployeeSchema = require('../schema/EmployeeSchema')
class EmployeeRepository {
    async create(payload) {
        return EmployeeSchema.create(payload)
    }
    async list(payload) {
        return EmployeeSchema.find(payload)
    }
    async getById(payload) {
        return EmployeeSchema.findById(payload)
    }
}

module.exports = new EmployeeRepository()