// in Hotel.js we stroe the information related to hotels in database
// like number of rooms in hotel

import mongoose from 'mongoose'
const {Schema}   =  mongoose

const UserSchema = new Schema({
    username : {
        type : String ,
        required : true
    },
    email : {
        type : String ,
        unique: true
    },
    password : {
        type : String ,
        required : true
    },
    isAdmin :{
        type : Boolean,
        default: false
    }
  })

export default mongoose.model("User" , UserSchema);
// export the model in that formate