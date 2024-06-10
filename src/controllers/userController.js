import userService from "../services/userService.js";
import { respon } from "../../utils/respon.js";

const tampilData = async (req, res, next) => {
   try {
      let data = await userService.tampilDataService()
      respon(res, 200, data)
   } catch (e) {
      next(e)
   }
}

const cariData = async (req, res, next) => {
   try {
      let data = await userService.cariDataService(req.params.nama)
      respon(res, 200, data)
   } catch (e) {
      next(e)
   }
}

const absenMasuk = async (req, res, next) => {
   try {
      let data = await userService.absenMasukService(req.params.id)
      respon(res, 201, data, "Berhasil absen!")
   } catch (e) {
      next(e)
   }
}


export default {
   tampilData,
   cariData,
   absenMasuk
}