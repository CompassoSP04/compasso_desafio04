const EmployeeRepository = require("../repository/EmployeeRepository");
const Employee = require("../schema/EmployeeSchema");
//const moment = require('moment')

class EmployeeService {
  //Create
  async create(payload) {
    const result = await EmployeeRepository.create(payload);
    //const birthFormat = moment(result.birthday, 'YYYY/MM/DD').format('DD/MM/YYYY')
    return result;
  }
  //List All
  async list(payload) {
    const result = await EmployeeRepository.list(payload);
    return result;
  }
  //List by Id
  async getById(payload) {
    const result = await EmployeeRepository.getById(payload);
    return result;
  }
  //Update
  async updateEmployee(id, body) {
    const result = await EmployeeRepository.updateEmployee(id, body);
    return result;
  }
  //Delete
  async deleteEmployee(payload) {
    const result = await EmployeeRepository.deleteEmployee(payload);
    return result;
  }
}
module.exports = new EmployeeService();
