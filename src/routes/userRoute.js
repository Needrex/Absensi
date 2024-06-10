import express from "express";
import userController from "../controllers/userController.js";

const userRoute = express.Router()

userRoute.route('/')
   .get(userController.tampilData)

// userRoute.route('/:nama')
//    .get(userController.cariData)

userRoute.route('/:id')
   .get(userController.absenMasuk)

export {
   userRoute
}