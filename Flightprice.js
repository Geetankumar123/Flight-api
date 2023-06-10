   const mongoose= require("mongoose")


         flightpriceSchema= mongoose.Schema({
              source:String,
               destination:String,
                 Date:Date
         })




    module.exports=mongoose.model("Flightprice",flightpriceSchema)