const JoiDate = require('@joi/date')
const Joi = require('joi').extend(JoiDate)

module.exports = async (req, res, next) => {
    try {
       function isValidCPF(cpf) {

        if (cpf == "00000000000") return false;
        if (cpf.length != 11) return false;

        return true;

       }

        const schema = Joi.object({
            name: Joi.string().min(3).max(30).required().trim(),
            cpf: Joi.string().required(),
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

/*<script>
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
var strCPF = "12345678909";
alert(TestaCPF(strCPF));
</script>*/