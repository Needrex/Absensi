import Joi from "joi";

const insertValidation = Joi.object({
   nama: Joi.string().min(5).max(50).required(),
   email: Joi.string().email().required(),
   kelas: Joi.string().valid('X', 'XI', 'XII').required(),
   jurusan: Joi.string().valid('RPL', 'AKL', 'OTKP', 'BDP', 'MM').required(),
   kelamin: Joi.string().valid('Pria', 'Wanita').required(),
   alamat: Joi.string().min(10).max(50).required(),
})

const findDataValidation = Joi.object({
   nama: Joi.string().required().min(5).max(50)
})

const updateValidation = Joi.object({
   nama: Joi.string().min(5).max(50),
   email: Joi.string().email(),
   kelas: Joi.string().valid('X', 'XI', 'XII'),
   jurusan: Joi.string().valid('RPL', 'AKL', 'OTKP', 'BDP', 'MM'),
   kelamin: Joi.string().valid('Pria', 'Wanita'),
   alamat: Joi.string().min(10).max(50),
})
export default {
   insertValidation,
   findDataValidation,
   updateValidation
}