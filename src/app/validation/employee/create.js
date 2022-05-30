const JoiDate = require('@joi/date');
const Joi = require('joi').extend(JoiDate)
const validateCPF = require('./cpfValid.js')

module.exports = async (req, res, next) => {
    try {
    
        const schema = Joi.object({
            name: Joi.string().min(3).max(30).required().trim(),
            cpf: Joi.string().required(),
            office: Joi.string().required().valid('gerente','vendedor','caixa'),
            birthday: Joi.date().format('DD/MM/YYYY').max('now').required(),
            situation: Joi.string().default('active')
        })

        const { error } = await schema.validate(req.body, { abortEarl: true })

        if (error) {
            throw {
              message: 'Bad Request',
              details: error.details
            };
          }
      
          if (!validateCPF(req.body.cpf)) {
            throw {
              message: 'Bad Request',
              details: 'Invalid CPF'
            };
          }
      
          return next();
        } catch (error) {
          return res.status(400).json(error);
        }
      }
