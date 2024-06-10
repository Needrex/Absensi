import express from "express"
import passport from "passport";
import { } from "./koneksi.js"
import cors from "cors";
import { errorHandler } from "../../middleware/errorHandler.js"
import cookieParser from "cookie-parser"
import { adminRoute } from "../routes/adminRoute.js"
import { verifikasiAkses } from "../../middleware/verifikasiAkses.js"
import { publicRoute } from "../routes/publicRoute.js";
import { userRoute } from "../routes/userRoute.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import { GoogleStrategy } from "../../utils/settingOauth2Goole.js";

dotenv.config({ path: './config/.env' })
const DATABASE_URL = process.env.DATABASE_URL
const SESSION_KEY = process.env.SESSION_KEY


const app = express()
app.use(passport.initialize());
passport.use(GoogleStrategy)

app.use(express.json())
app.use(session({
   secret: SESSION_KEY,
   resave: false,
   saveUninitialized: false,
   store: MongoStore.create({
      mongoUrl: DATABASE_URL,
      collectionName: 'session',
      ttl: 14 * 24 * 60 * 60,
      autoRemove: 'native'
   })
}))
app.use(passport.authenticate('session'));
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())

// app.use(publicRoute)
// app.use(verifikasiAkses)
app.use('/needrex/v2', userRoute)
app.use('/needrex/v1', adminRoute)
app.use(errorHandler)

app.all('*', (req, res) => {

   res.status(404).json({
      message: "Not Found!!"
   })
})

export {
   app
}