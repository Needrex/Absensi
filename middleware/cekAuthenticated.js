export const cekAuthenticated = (req, res, next) => {
   if (req.isAuthenticated()) {
      return next()
   } else {
      res.redirect('/needrex/v1/test/tests')
   }
}