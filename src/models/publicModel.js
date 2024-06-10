import mongoose from "mongoose";

const publicSchema = new mongoose.Schema({
   foto: {
      type: String,
      required: true,
      min: 5
   },
   nama: {
      type: String,
      required: true,
      min: 5,
      max: 50
   },
   googleID: {
      type: String,
      required: true,
   }
})

const publicModel = mongoose.model('public', publicSchema)
export {
   publicModel
}