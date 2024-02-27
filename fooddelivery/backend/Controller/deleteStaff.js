const Staff=require("../Models/Staff");

exports.deleteStaff=async(req,res)=>{

      try{
            const {staffNo}=req.params;

          const response=  await Staff.deleteOne({
                 staffNo:staffNo
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