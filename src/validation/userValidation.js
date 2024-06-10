import Joi from "joi";

const userValidation = Joi.object({
   nama: Joi.string().min(5).max(50).required(),
   kelas: Joi.string().valid('X', 'XI', 'XII').required(),
   jurusan: Joi.string().valid('RPL', 'AKL', 'OTKP', 'BDP', 'MM').required()
})

const cariDataValidation = Joi.object({
   nama: Joi.string().min(5).max(50).required(),
})

export default {
   userValidation,
   cariDataValidation
}