import { ResponErrorJoi } from "../utils/responErrorJoi.js"

export const errorHandler = async (err, req, res, next) => {
   if (!err) {
      next()
   }

   // if (err instanceof ResponErrorJoi) {
   //    res.status(err.statusCode).json({
   //       success: false,
   //       status: "Bad Request",
   //       message: err.message,
   //       errors: err.error
   //    }).end()
   // } else {
   err.statusCode = err.statusCode || 500
   switch (err.statusCode) {
      case 400:
         err.status = "Bad Request"
         break;
      case 401:
         err.status = "Unauthorized"
         break;
      case 404:
         err.status = "Not Found"
         break;
      case 500:
         err.status = "Server Error"
         break;
      default:
         break;
   }

   res.status(err.statusCode).json({
      success: false,
      status: err.status,
      message: err.message,
      errorStack: err.stack
   }).end()
   // }

   next()
}