const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
//properties
name:{
    type:String,
    required:[true,"Please Add a Name"]
},
email:{
    type:String,
    required:[true,"please enter a email"],
    unique: true,
    trim:true,
    match:[
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please enter a valid email"
    ]
},
password:{
    type:String,
    required:[true,"Please provide a password"],
    minLength:[6,"password must be up to 6 characters"],
    //maxLength:[15,"password must not exceed 15 characters"]

},
photo:{
    type:String,
    required:[true,"Please Add a photo"],
    default:"image.jpg"
    

},
phone:{
    type:String,
    required:[true,"Please add a number"],
    default:"+2010111111111"
   
   
}
 
},{
    timestamps:true
})

const User = mongoose.model("User", userSchema)
module.exports = User;