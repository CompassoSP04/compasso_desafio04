const mongoose = require('mongoose')

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
        type: Date
    }
})

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee