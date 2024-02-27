const mongoose=require("mongoose");

const staffSchema=mongoose.Schema({
      staffNo:{
            type:String,
            require:true,
           
      },
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
      online:{
            type:Boolean,
            require:true,
            default:true,
      },
      createAt:{
            type:Date,
            require:true,
            default:Date.now()
      },
      starttime:{
            type:String,
            require:true,
            default:"10am"

      },
      endtime:{
            type:String,
            require:true,
            default:"10am"


      },
      date:{
            type:String,
            require:true
      },
     
})

module.exports=mongoose.model("Staff",staffSchema);
