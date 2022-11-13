const express = require("express")
const employeeRouter = require("./router/employeeRouter")
const mongo = require("./connect");
const dotenv = require("dotenv")

dotenv.config();
mongo.connect()
const app = express();
app.use(express.json()) //to parse req.body from client to server

app.use("/",(req,res,next)=>{
    var auth={
        authorised: true
    }
    if(auth.authorised===true){
        next();
    }else{
        res.send({msg:"Unauthorised"})
    }
    console.log("first")
})

app.use("/employees", employeeRouter)
app.listen(process.env.PORT)