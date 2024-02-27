const Customer=require("../Models/Customer");

exports.getCustomer=async(req,res)=>{

      try{
            

          const response=  await Customer.find({});

            res.status(200).json({
                  sucess:true,
                  data:response,
                  message:"Customer data"
            })
      }catch(e){
            console.log(e);

            res.status(500).json({
                  sucess:false,
                  message:"Server error"
            });
      }
}