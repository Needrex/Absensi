import { ResponError } from "../../utils/responError.js";
import { adminModel } from "../models/adminModel.js";
import adminValidation from "../validation/adminValidation.js";
import { ResponErrorJoi } from "../../utils/responErrorJoi.js";
import { validate } from "../validation/validate.js";


const showAllData = async () => {
   try {
      let result = await adminModel.find()
      return result
   } catch (error) {

      throw new ResponError(500, error)
   }
}

const findData = async (nama) => {
   try {
      let dataValid = validate(adminValidation.findDataValidation, nama)
      let result = await adminModel.find(dataValid)
      if (result.length > 0) {
         return result
      } else {
         throw "Data tidak di temukan!"
      }
   } catch (error) {
      throw new ResponError(400, error)
   }
}

const insertData = async (data) => {
   try {
      let dataValid = validate(adminValidation.insertValidation, data)

      let { nama, email, kelas, jurusan, kelamin, alamat } = dataValid

      let dataSchema = new adminModel({
         nama,
         email,
         kelas,
         jurusan,
         kelamin,
         alamat
      })

      let result = await dataSchema.save()
      return result

   } catch (error) {
      throw new ResponErrorJoi(400, error)
   }
}

const deleteData = async (id) => {
   try {
      let result = await adminModel.findByIdAndDelete(id)
      if (result.length > 0) {
         return result
      } else {
         throw "Data tidak di temukan!"
      }
   } catch (error) {
      throw new ResponError(400, error)
   }
}

const updateData = async (id, data) => {
   try {
      let dataValid = validate(adminValidation.updateValidation, data)
      let result = await adminModel.findByIdAndUpdate(id, {
         $set: {
            nama: dataValid.nama,
            kelamin: dataValid.kelamin,
            kelas: dataValid.kelas,
            jurusan: dataValid.jurusan,
            alamat: dataValid.alamat,
            email: dataValid.email,
         }
      })


      if (result == null) {
         throw "Data tidak di temukan!"
      } else {
         return result
      }
   } catch (error) {
      throw new ResponError(400, error)
   }
}

export default {
   showAllData,
   insertData,
   findData,
   deleteData,
   updateData
}