

export class ResponErrorJoi extends Error {
   constructor(statusCode, message) {
      super(message)
      this.statusCode = statusCode
   }
}