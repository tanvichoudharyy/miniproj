const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true}
)

module.exports=mongoose.model('User',userSchema)