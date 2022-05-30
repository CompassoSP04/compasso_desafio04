const EmployeeSchema = require('../schema/EmployeeSchema')
class EmployeeRepository {
    async create(payload) {
        return EmployeeSchema.create(payload)
    }
    async list(payload) {
        const paginateFields = {
            totalDocs: 'totalCount',
            docs: 'Employee',
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
        return EmployeeSchema.paginate(payload, options, {})
        
    }
    async getById(payload) {
        return EmployeeSchema.findById(payload)
    }
    async updateEmployee(id, body) {
        return EmployeeSchema.findByIdAndUpdate(id, body)
    }
    async deleteEmployee(payload) {
        return EmployeeSchema.findByIdAndDelete(payload)
    }
}   

module.exports = new EmployeeRepository()