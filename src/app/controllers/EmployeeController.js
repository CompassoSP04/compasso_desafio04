const EmployeeService = require('../service/EmployeeService')

class EmployeeController {
    //Create
    async create(req, res) {
        try {
            const result = await EmployeeService.create(req.body)
            return  res.status(201).json(result)
        } catch(error) {
            return res.status(400).json(error)
    
        } 
    }
    //List All   
    async list(req, res) {
      const payload = req.body
      try {
        const result = await EmployeeService.list(payload)
        return res.status(200).json(result)
      } catch (error) {
        return res.status(400).json(error)
      }

    }

    //List by Id
    async getById(req, res) {
        try {
          const result = await EmployeeService.getById(req.params.id);
          return res.status(200).json(result);
        } catch (error) {
          return res.status(400).json(error);
        }
      }
    //Update
    async update(req, res) {
      try {
        const result = await EmployeeService.updateEmployee(req.params.id, req.body)
        return res.status(200).json(result)
      } catch (error) {
        return res.status(400).json(error)
      }
    }
    //Delete
    async delete(req, res) {
      try {
        const result = await EmployeeService.deleteEmployee(req.params.id)
        return res.status(204).json(result)
      } catch (error) {
        return res.status(400).json(error)
      }
    }
} 

module.exports = new EmployeeController ()