const Available=require("../Models/Available");
exports.deleteAvilability=async (req,res)=>{

      try{

            const {staffNo}=req.params;

            const response =await Available.deleteOne({staffNo:staffNo});

            res.status(200).json({
                  sucess:true,
                  data:response,
                  message:"Avilabiltiy delete"
            });

      }catch(e){

            res.status(500).json({
                  sucess:false,
                  message:"Server error",
            })
      }


}