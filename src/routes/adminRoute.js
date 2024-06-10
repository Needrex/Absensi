import express from "express";
import adminController from "../controllers/adminController.js";
import { cekAuthenticated } from "../../middleware/cekAuthenticated.js";

const adminRoute = express.Router()

adminRoute.route('/')
   .get(cekAuthenticated, adminController.allData)
   .post(cekAuthenticated, adminController.insertData)


adminRoute.route('/:nama')
   .get(cekAuthenticated, adminController.findData)

adminRoute.route('/:id')
   .put(cekAuthenticated, adminController.updateData)
   .delete(cekAuthenticated, adminController.deleteData)

export {
   adminRoute
}