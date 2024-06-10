import { ResponError } from "../utils/responError.js"
import dotenv from "dotenv";

dotenv.config({ path: './config/.env' })

const { KEY_AKSES, VALUE_AKSES } = process.env
export const verifikasiAkses = (req, res, next) => {
   const dataAkses = req.get(KEY_AKSES)
   if (dataAkses == VALUE_AKSES) {
      next()
   } else {
      throw new ResponError(400, "Data akses tidak sesuai!")
   }
}