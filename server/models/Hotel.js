// in Hotel.js we stroe the information related to hotels in database
// like number of rooms in hotel

import mongoose from 'mongoose'
const {Schema}   =  mongoose

const HotelScema = new Schema({
    name : {
        type : String ,
        required :true
    },
    city : {
        type : String ,
        required :true
    },
    address : {
        type : String ,
        required :true
    },
    photos : {
        type : [String]
    },
    distance : {
        type : String ,
        required :true
    },
    desc : {
        type : String ,
        required :true
    },
    rating : {
        type : Number ,
        min : 0 ,
        max : 5
    },
    rooms : {
        type : [String]
    },
    cheapestPrice :{
        type : Number, 
        required : true
    },
    featured : {
        type : Boolean,
        default : false
    }
})

export default mongoose.model("Hotel" , HotelScema)
// export the model in that formate