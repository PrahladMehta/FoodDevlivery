
const mongoose =require("mongoose");

const DbConnect=()=>{
      mongoose.connect("mongodb://localhost:27017/Staff").then(()=>{
            console.log("DataBase Connected");
      }).catch((e)=>{
            console.log(e);
      });
}

module.exports=DbConnect;