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
    //List All   
    async list(req, res) {
        const result = await ProductService.list(req.query)
        return res.status(200).json(result)
    }
}
module.exports = new ProductController()