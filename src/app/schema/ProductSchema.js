const mongoose = require('mongoose')
const uuid = require('uuid')

const ProductSchema = new mongoose.Schema({
   
    product_id: {
        type: String,
        default: uuid.v4,
        index: true,
        mongoose:mongoose.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true

    },
    price: {
        type: Number,
        required: true
    },
    employee_id: {
        type: String,
        ref: 'Employee'
    }

})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
