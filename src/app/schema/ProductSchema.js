const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({

    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
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
},


{timestamps: false, versionKey: false}
)
ProductSchema.virtual('product_id').get(function() {
    return this._id
})
ProductSchema.set('toJSON',{
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id,
        delete converted.id
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
