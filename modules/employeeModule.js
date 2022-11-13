const { ObjectId } = require("mongodb");
const mongo = require("../connect")

module.exports.getEmployees=async (req,res,next)=>{
    try{
        const employeesData = await mongo.selectedDb.collection("employees").find().toArray();
        res.send(employeesData)
    }catch(err){
        console.log(err)
        res.status(500).send(err);
    }
}

module.exports.updateEmployees= async (req,res,next)=>{
    const id = req.params.id;
    try{
        const updatedData = await mongo.selectedDb.collection("employees").findOneAndUpdate({_id:ObjectId(id)},{$set:{...req.body}},{returnDocument:"after"});
        res.send(updatedData)
    }catch(err){
        console.log(err)
        res.status(500).send(err);
    }
}

module.exports.createEmployees= async (req,res,next)=>{
    try{
        const insertedResponse = await mongo.selectedDb.collection("employees").insertOne(req.body);
        res.send(insertedResponse);
    }catch(err){
        console.log(err)
        res.status(500).send(err);
    }
}

module.exports.deleteEmployees=async (req,res,next)=>{
    const id = req.params.id;
    try{
        const deletedData = await mongo.selectedDb.collection("employees").remove({_id:ObjectId(id)});
        res.send(deletedData)
    }catch(err){
        console.log(err)
        res.status(500).send(err);
    }
}