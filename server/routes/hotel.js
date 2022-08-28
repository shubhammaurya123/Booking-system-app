import express from 'express';  // we add express libery

import {addHotels , updateHotels , DeleteHotels , getHotel , getAllHotels} from '../controllers/hotel.js'

import { verfiyAdmin , verfiyUser } from '../util/verifyToken.js';

const router = express.Router();   // here we use router in his app when hi take router from express


router.post("/add"  , addHotels)

router.put("/:id" , verfiyAdmin ,updateHotels)
   
router.delete("/:id" ,verfiyUser , DeleteHotels)


//if we need only one hotel name
router.get("/all" , getAllHotels)

router.get("/:id" , getHotel) 



// if need of all hotel



export default router;