const ProductService = require('../service/ProductService')
class ProductController {
    //Create
    async create(req, res) {
        try {
            const result = await (await ProductService.create({ ...req.body,_id: req.employee_id})).populate('employee_id')
            // const result = await ProductService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
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
        try {
        const result = await ProductService.list(req.query)
        return res.status(200).json(result)
        } catch (error) {
            return res.status(400)
        }
        
    }

    
}
module.exports = new ProductController()