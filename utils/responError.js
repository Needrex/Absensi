export class ResponError extends Error {
   constructor(statusCode, message) {
      super(message)
      this.statusCode = statusCode
   }
}