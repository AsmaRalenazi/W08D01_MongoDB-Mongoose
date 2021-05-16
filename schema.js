const mongoose= require ("mongoose");

const todoSchema =new mongoose.Schema({

    task:{type:String, required:true},
    description:{type:String, required:true},
    deadline :{type:String, required:true},
    isCompleted:{type:String, required:true},
    priority:{type:String, }
})

module.exports=mongoose.model("todo",todoSchema)
//module.exports = mongoose.model("User",userSchema)