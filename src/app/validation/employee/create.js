const JoiDate = require('@joi/date')
const Joi = require('joi').extend(JoiDate)

module.exports = async (req, res, next) => {
    try {

      function formatCpf(text) {
        const badchars = /[^\d]/g
        const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/
        const cpf = new String(text).replace(badchars, "");
        return cpf.replace(mask, "$1.$2.$3-$4");
    }

       function isValidCPF(number) {

        if (number == "00000000000") return false;
        if (number.length != 11) return false;

        return true;

       }

        const schema = Joi.object({
            name: Joi.string().min(3).max(30).required().trim(),
            cpf: Joi.number().required(),
            office: Joi.string().required().valid('gerente','vendedor','caixa'),
            birthday: Joi.date().format('DD/MM/YYYY').max('now').required()
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
