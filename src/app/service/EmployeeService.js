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
}
module.exports = new EmployeeService()