const express=require("express");
const cors=require("cors");



const app=express();
app.use(cors());
app.use(express.json());

app.listen(4000,()=>{
      console.log("Port Assigne");
});

const DbConnect=require("./Configr/DataBase");
DbConnect();

const route=require("./routes/routes");

app.use("",route);