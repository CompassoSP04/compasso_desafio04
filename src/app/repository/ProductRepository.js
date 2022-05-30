const ProductSchema = require('../schema/ProductSchema')
class ProductRepository {
    async create(payload) {
        return ProductSchema.create(payload)
    }
    async list(payload) {
        const paginateFields = {
            totalDocs: 'totalCount',
            docs: 'Product',
            page: 'currentPage',
            nextPage: false,
            prevPage: false,
            pagingCounter: false,
            meta: false,
            hasPrevPage: false,
            hasNextPage: false,
            limit: 'pageSize'
        };
        const options = {
            page: 0,
            limit: 25,
            customLabels: paginateFields
        };
        return ProductSchema.paginate(payload, options, {})
    }
}
module.exports = new ProductRepository()