const mongoose=require("mongoose");

const availableSchema=mongoose.Schema({
    
      staffNo:{
            type:String,
            require:true
      },
      name:{
            type:String,
            require:true,
            maxlength:30
      },
      contactNo:{
            type:String,
            require:true
      },
      starttime:{
            type:String,
            require:true,
            default:"10am"
      },
      endtime:{
            type:String,
            require:true,
            default:"5pm"
      }
      
})

module.exports=mongoose.model("Available",availableSchema);


