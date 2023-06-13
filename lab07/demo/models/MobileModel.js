var mongoose = require('mongoose')
var MobileSchema = mongoose.Schema(
   {
      name: String,
      brand: String,
      color: String,
      quantity: Number, 
      image: String,
      video: String
   }
)
var MobileModel = mongoose.model("DIEN THOAI", MobileSchema, "Mobile");
module.exports = MobileModel;