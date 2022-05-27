const mongoose = require('mongoose')
const uuid = require('uuid')

const EmployeeSchema = new mongoose.Schema({

    employee_id: {
        type: String,
        default: uuid.v4,
        index: true,
        mongoose:mongoose.ObjectId
    },
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

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee