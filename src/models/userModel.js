import mongoose from "mongoose";

const absenMasukSchema = new mongoose.Schema({
   nama: {
      type: String,
      required: true
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
   jam: {
      type: String,
      required: true
   },
   tanggal: {
      type: String,
      required: true
   }
})

const absenPulangSchema = new mongoose.Schema({
   nama: {
      type: String,
      required: true
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
   jam: {
      type: String,
      required: true
   },
   tanggal: {
      type: String,
      required: true
   }
})


const absenMasukModel = mongoose.model('absenMasuk', absenMasukSchema)
const absenPulangModel = mongoose.model('absenPulang', absenPulangSchema)
export default {
   absenMasukModel,
   absenPulangModel
}