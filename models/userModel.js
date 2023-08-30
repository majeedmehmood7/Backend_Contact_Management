const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type : String,
        required: [true ,"Please enter your name"]
    },
    email:{
        type: String,
        required:[true , "Please enter the email"],
        unique:[true , "Email address already taken"]
    },
    password:{
        type:String,
        required:[true ,"Please add a Password"]
    }

},
{
    timestamps: true,
})

module.export = mongoose.model("User",userSchema);