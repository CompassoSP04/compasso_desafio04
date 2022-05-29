const JoiDate = require('@joi/date')
const Joi = require('joi').extend(JoiDate)

module.exports = async (req, res, next) => {
    try {
       function isValidCPF(number) {

        if (number == "00000000000") return false;
        if (number.length != 11) return false;

        return true;
       }

        const schema = Joi.object({
            name: Joi.string().requerid(),
            cpf: Joi.string().requerid(),
            office: Joi.string().requerid(),
            birthday: Joi.date().format('DD/MM/YYYY').max('now').requerid()
        })

        const { error } = await schema.validate(req.body, { abortEarl: true })

        if (error) {
            throw {
              message: 'Bad Request',
              details: error.details
            };
          }
      
          if (!isValidCPF(req.body.cpf)) {
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
