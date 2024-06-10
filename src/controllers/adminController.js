import adminService from "../services/adminService.js";
import { respon } from "../../utils/respon.js";

const allData = async (req, res, next) => {
   try {
      console.log(req.session);
      let data = await adminService.showAllData()
      respon(res, 200, data)
   } catch (e) {
      next(e)
   }
}

const findData = async (req, res, next) => {
   try {
      let keyword = req.params
      let data = await adminService.findData(keyword)
      respon(res, 200, data)
   } catch (e) {
      next(e)
   }
}

const insertData = async (req, res, next) => {
   try {
      let data = req.body
      let result = await adminService.insertData(data)
      respon(res, 201, result)
   } catch (e) {
      next(e)
   }
}

const deleteData = async (req, res, next) => {
   try {
      let data = req.params
      let result = await adminService.deleteData(data)
      respon(res, 201, result)
   } catch (e) {
      next(e)
   }
}

const updateData = async (req, res, next) => {
   try {
      let id = req.params.id
      let data = req.body

      let result = await adminService.updateData(id, data)
      respon(res, 201, result)
   } catch (e) {
      next(e)
   }
}

export default {
   allData,
   findData,
   insertData,
   deleteData,
   updateData
}