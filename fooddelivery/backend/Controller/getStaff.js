const Staff=require("../Models/Staff");

exports.getStaff=async(req,res)=>{

      try{
      

          const response=  await Staff.find({
              
            });

            res.status(200).json({
                  sucess:true,
                  data:response,
                  message:"Data Deleted"
            })
      }catch(e){
            console.log(e);

            res.status(500).json({
                  sucess:false,
                  message:"Server error"
            });
      }
}