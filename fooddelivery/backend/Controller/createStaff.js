const Staff=require("../Models/Staff");

exports.createStaff=async(req,res)=>{

      try{
            const {staffNo,name,contactNo,online,starttime,endtime,date,status}=req.body;

          const response=  await Staff.create({
            staffNo:staffNo,
                  name:name,
                  contactNo:contactNo,
                  online:online,
                  starttime:starttime,
                  endtime:endtime,
                  date:date,
                  status:status
            });

            res.status(200).json({
                  sucess:true,
                  data:response,
                  message:"Data Add"
            })
      }catch(e){
            console.log(e);

            res.status(500).json({
                  sucess:false,
                  message:"Server error"
            });
      }
}