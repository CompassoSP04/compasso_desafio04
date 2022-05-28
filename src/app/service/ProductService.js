const res = require('express/lib/response')
const ProductRepository = require('../repository/ProductRepository')
const Product = require('../schema/ProductSchema')

class ProductService {

    //Create
    async create(payload) {
        const result = await ProductRepository.create(payload)
        return result
    }
    //List All
    async list(payload) {
        const result = await ProductRepository.list(payload)
        return result
    }
}
module.exports = new ProductService()