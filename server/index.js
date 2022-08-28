import mongoose from 'mongoose';
import express from 'express'; // we use type : module in pakage.json
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from "./routes/auth.js"
import hotelRoute from "./routes/hotel.js"
import roomRoute from "./routes/room.js"
import userRoute from "./routes/users.js"
import cookieParser  from 'cookie-parser';
const router = express.Router();

const app = express();

app.use(express.json());
//cors use beacause without it we not passes direct data req.body to in database
app.use(cors());
//we use this cookie beacuse it does not allow to reach in any secret value to user that mean it much secure now
app.use(cookieParser());
dotenv.config();

app.use("/api/auth" , authRoute);
app.use("/api/hotel" , hotelRoute);
app.use("/api/users" , userRoute )
app.use("/api/room" , roomRoute )

app.use((error , req , res , next) => {
    console.log("some error found index.js");
}) 

const connect = async() => {
    try {
        await mongoose.connect(process.env.Mongo);
        console.log("MongoDb is connected");
    }catch(error) {
        console.log(error);
    }
};
app.listen(5000 , ()=> {
    connect();
    console.log("backend is connected");
   // console.log(process.env.Mongodb);
})