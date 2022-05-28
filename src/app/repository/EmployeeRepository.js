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
    async updateEmployee(id, body) {
        return EmployeeSchema.findByIdAndUpdate(id, body)
    }
}

module.exports = new EmployeeRepository()