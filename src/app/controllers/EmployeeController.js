const EmployeeService = require('../service/EmployeeService')

class EmployeeController {
    //Create
    async create(req, res) {
        try {
            const result = await EmployeeService.create(req.body)
            return  res.status(201).json(result)
        } catch(error) {
            return res.status(400).json({
              message: "Bad Request",
              details: [{
                message: error.message
              }]
            })
        } 
    }
    //List All   
    async list(req, res) {
      const payload = req.query
      try {
        const result = await EmployeeService.list(payload)
        return res.status(200).json(result)
      } catch (error) {
        return res.status(400).json({
          message: "Bad Request",
          details: [{
            message: error.message
          }]
        })
      }

    }

    //List by Id
    async getById(req, res) {
        try {
          const result = await EmployeeService.getById(req.params.id);
          return res.status(200).json(result);
        } catch (error) {
          return res.status(400).json({
            message: "Bad Request",
            details: [{
              message: error.message
            }]
          });
        }
      }
    //Update
    async update(req, res) {
      try {
        const result = await EmployeeService.updateEmployee(req.params.id, req.body)
        return res.status(200).json({
          message: "Success",
          details: [{
            message: `The id was successfully Updated`
          }]
        })

      } catch (error) {
        return res.status(400).json({
          message: "Bad Request",
          details: [{
            message: error.message
          }]
        })
      }
    }
    //Delete
    async delete(req, res) {
      try {
        const result = await EmployeeService.deleteEmployee(req.params.id)
        return res.status(200).json({
          message: "Success",
          details: [{
            message: `The id was successfully deleted`
          }]
        })
      } catch (error) {
        return res.status(400).json({
          message: "Success",
          details: [{
            message: `Id not found`
          }]
        })
      }
    }
} 

module.exports = new EmployeeController ()