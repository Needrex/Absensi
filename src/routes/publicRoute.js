import passport from "passport";
import express from "express";
import { respon } from "../../utils/respon.js";
import { publicModel } from "../models/publicModel.js";


const publicRoute = express.Router()

passport.serializeUser(function (user, cb) {
   console.log("S" + user);
   process.nextTick(function () {
      cb(null, { id: user.id });
   });
});

passport.deserializeUser(async (user, cb) => {
   publicModel.findById(user.id)
      .then(user => { return cb(null, user) })
      .catch(e => { return cd(e) })
});

publicRoute.get('/auth/google/', passport.authenticate('google'))

publicRoute.get('/auth/google/callback', passport.authenticate('google', {
   successRedirect: '/needrex/v1/',
   failureRedirect: '/needrex/v1/test/test'
})
)

publicRoute.get('/auth/google/logout', (req, res, next) => {
   req.logout((e) => {
      if (e) { return next(e) }

      respon(res, 200, "", "Berhasil Logout")
   })
})

export {
   publicRoute
}