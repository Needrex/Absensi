import mongoose from "mongoose";
import { ResponError } from "../../utils/responError.js";
import dotenv from "dotenv";
import { logger } from "./logger.js";

dotenv.config({ path: './config/.env' })
const DATABASE_URL = process.env.DATABASE_URL


const dbConnect = async () => {
   await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true
   })
      .catch(e => {
         new ResponError(500, e)
      })
   logger.info("Connect db!")
}



dbConnect()