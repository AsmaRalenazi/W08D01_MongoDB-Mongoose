const mongoose= require ("mongoose");

const todoSchema =new mongoose.Schema({

    task:{type:String, require:true},
    description:{type:String},
    deadline :{type:String, require:true},
    isCompleted:{type:Boolean, require:true},
    priority:{type:String,  require:true}
})

module.exports=mongoose.model("todo",todoSchema)
//module.exports = mongoose.model("User",userSchema)