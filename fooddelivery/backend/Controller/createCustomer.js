const Customer=require("../Models/Customer");

exports.createCustomer=async(req,res)=>{

      try{
            const {name,contactNo,order,address}=req.body;

          const response=  await Customer.create({
           
                  name:name,
                  contactNo:contactNo,
                  order:order,
                  address:address
                  
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