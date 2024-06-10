import { validate } from "../validation/validate.js";
import { ResponError } from "../../utils/responError.js";
import { adminModel } from "../models/adminModel.js";
import userModel from "../models/userModel.js";
import userValidation from "../validation/userValidation.js";


const tampilDataService = async () => {
   try {
      const data = await adminModel.find()
      return data
   } catch (e) {
      throw new ResponError(500, e)
   }
}

const cariDataService = async (nama) => {
   try {
      let dataValid = validate(userValidation.cariDataValidation, nama)
      let cariData = await adminModel.findOne(dataValid)

      if (cariData) {
         return cariData
      } else {
         throw "Data tidak di temukan!"
      }
   } catch (e) {
      throw new ResponError(400, e)
   }
}

const absenMasukService = async (id) => {
   try {
      let findData = await adminModel.findById(id)

      if (findData) {
         const { nama, kelas, jurusan } = findData
         const time = new Date()
         let data = new userModel.absenMasukModel({
            nama,
            kelas,
            jurusan,
            jam: time.getMinutes() + ":" + time.getHours(),
            tanggal: `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`
         })

         return await data.save()
      } else {
         throw "Data tidak di temukan!"
      }
   } catch (e) {
      throw new ResponError(400, e)
   }
}

export default {
   tampilDataService,
   cariDataService,
   absenMasukService
}