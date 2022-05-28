const res = require('express/lib/response')
const EmployeeRepository = require('../repository/EmployeeRepository')
const Employee = require('../schema/EmployeeSchema')

class EmployeeService {

    //Create
    async create(payload) {
        const result = await EmployeeRepository.create(payload)
        return result
    }
    //List All
    async list(payload) {
        const result = await EmployeeRepository.list(payload)
        return result
    }
    //List by Id
    async getById(payload) {
        const result = await EmployeeRepository.getById(payload)
        return result
    }
    //Update
    async updateEmployee(id, body) {
        const result = await EmployeeRepository.updateEmployee(id, body)
        return result
    }
    
}
module.exports = new EmployeeService()