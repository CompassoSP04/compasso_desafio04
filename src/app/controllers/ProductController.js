const Employee = require("../schema/EmployeeSchema");
const Product = require("../schema/ProductSchema");
const ProductService = require("../service/ProductService");

class ProductController {
  //Create
  async create(req, res) {
    const employee = await Employee.findOne({ employee_id: req.body });
    try {
      if (
        employee.situation == "active" ||
        employee.office == "gerente" ||
        Product.employee_id != null
      ) {
        const result = await (
          await ProductService.create({ ...req.body, _id: req.params.id })
        ).populate("employee_id");

        return res.status(201).json(result);
      } else {
        throw new Error();
      }
    } catch (error) {
      return res.status(400).json({
        message: "Bad Request",
        details: [
          {
            message: error.message,
          },
        ],
      });
    }
  }
  //List All
  async list(req, res) {
    try {
      const result = await ProductService.list(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400);
    }
  }
  //List by Id
  async getById(_id) {
    try {
      const result = await Employee.findOne({ employee_id: _id });
      if (!result) {
        throw new Error("Not Found");
      }
      return result;
    } catch (error) {
      return error;
    }
  }
}
module.exports = new ProductController();
