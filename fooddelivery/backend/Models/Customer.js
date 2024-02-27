const mongoose=require("mongoose");

const customerSchema=mongoose.Schema({
     name: {
            type:String,
            require:true,
            maxlength:30,

      },
      contactNo:{
            type:String,
            require:true,
            maxlength:12
      },
      order:{
            type:String,
            require:true,
            maxlength:20
      },
      address:{
            type:String,
            require:true,
            maxlength:30

      },
      createAt:{
            type:Date,
            require:true,
            default:Date.now()
      }
})

module.exports=mongoose.model("Customer",customerSchema);


