import { Strategy } from "passport-google-oauth20";
import { publicModel } from "../src/models/publicModel.js";

import dotenv from "dotenv";
dotenv.config({ path: './config/.env' })

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env


const GoogleStrategy = new Strategy({
   clientID: GOOGLE_CLIENT_ID,
   clientSecret: GOOGLE_CLIENT_SECRET,
   callbackURL: '/auth/google/callback',
   scope: ['profile']
},
   async (accesToken, refreshToken, profile, done) => {

      try {
         const googleID = profile.id;
         const nama = profile.displayName;
         const foto = profile.photos[0].value;

         let findUser = await publicModel.findOne({ googleID })

         if (!findUser) {
            let data = new publicModel({
               foto: foto,
               nama: nama,
               googleID: googleID,
            })

            await data.save()

            return done(null, data)
         }

         return done(null, findUser)
      } catch (error) {
         return done(error)
      }

   }
)


export {
   GoogleStrategy
}