const ProductSchema = require('../schema/ProductSchema')
class ProductRepository {
    async create(payload) {
        return ProductSchema.create(payload)
    }
    async list(payload) {
        return ProductSchema.paginate({payload}, {limit: 25})
    }
}
module.exports = new ProductRepository()