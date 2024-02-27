const Available=require("../Models/Available");

exports.updateAvailable=async(req,res)=>{

      try{

            const {staffNo,name,contactNo,starttime,endtime}=req.body;

          const response=  await Available.findOneAndUpdate({
                  staffNo:staffNo},{
                  staffNo:staffNo,        
                  name:name,
                  contacNo:contactNo,
                 
                  starttime:starttime,
                  endtime:endtime,
             
                 
            });

            res.status(200).json({
                  sucess:true,
                  data:response,
                  message:"Data updated"
            })
      }catch(e){
            console.log(e);

            res.status(500).json({
                  sucess:false,
                  message:"Server error"
            });
      }
}

