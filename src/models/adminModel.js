import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
   nama: {
      type: String,
      required: true,
      min: 5,
      max: 50
   },
   email: {
      type: String,
      required: true,
      min: 5,
      max: 50
   },
   kelas: {
      type: String,
      enum: ['X', 'XI', 'XII'],
      required: true
   },
   jurusan: {
      type: String,
      enum: ['RPL', 'AKL', 'OTKP', 'BDP', 'MM'],
      required: true
   },
   kelamin: {
      type: String,
      enum: ['Pria', 'Wanita'],
      required: true
   },
   alamat: {
      type: String,
      required: true
   },
})

const adminModel = mongoose.model('user', adminSchema)
export {
   adminModel
}