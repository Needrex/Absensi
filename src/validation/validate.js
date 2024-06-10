export const validate = (validation, data) => {
   const dataValidation = validation.validate(data)

   if (dataValidation.error) {
      throw dataValidation.error
   } else {
      return dataValidation.value
   }
}