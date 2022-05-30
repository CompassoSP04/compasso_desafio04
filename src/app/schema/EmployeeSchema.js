const mongoose = require('mongoose')
const uuid = require('uuid')
const moongosePaginate = require('mongoose-paginate-v2')


const EmployeeSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    office: {
        type: String,
        enum: {
            values: ['gerente', 'vendedor', 'caixa'], 
            message: 'Value is not supported '
        },
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    situation: {
        type: String,
        enum: ['active', 'deactivate'],
        default: 'active',
        require: true
    }
}, 
  {timestamps: true, versionKey: false}
)

EmployeeSchema.virtual('employee_id').get(function() {
    return this._id
})
EmployeeSchema.set('toJSON',{
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id
        delete converted.id
    }
})
EmployeeSchema.plugin(moongosePaginate)

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee