const ProductService = require('../service/ProductService')
class ProductController {
    //Create
    async create(req, res) {
        try {
            const result = await ProductService.create(req.body)
            return res.status(201).json(result)
        } catch (error) {
            return res.status(400).json(error)

        }
    }
}
module.exports = new ProductController()