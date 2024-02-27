const Available=require("../Models/Available");
exports.getAvilability=async (req,res)=>{

      try{

      

            const response =await Available.find();

            res.status(200).json({
                  sucess:true,
                  data:response,
                  message:"Get all data"
            });

      }catch(e){

            res.status(500).json({
                  sucess:false,
                  message:"Server error",
            })
      }


}