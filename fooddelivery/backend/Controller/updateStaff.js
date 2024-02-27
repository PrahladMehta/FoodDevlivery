
const Staff=require("../Models/Staff");

exports.updateStaff=async(req,res)=>{

      try{
      
          const {staffNo,name,contactNo,online,starttime,endtime,date,status}=req.body;

          const response=  await Staff.findOneAndUpdate({staffNo:staffNo},{
            name:name,
            contacNo:contactNo,
                  online:online,
                  starttime:starttime,
                  endtime:endtime,
                  date:date,
                  status:status

          });

            res.status(200).json({
                  sucess:true,
                  data:response,
                  message:"Data Upadate"
            })
      }catch(e){
            console.log(e);

            res.status(500).json({
                  sucess:false,
                  message:"Server error"
            });
      }
}