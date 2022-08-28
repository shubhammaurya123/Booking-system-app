import express from 'express';  // we add express libery

import {createRoom , updateRoom , DeleteRoom , getRoom , getAllRoom} from '../controllers/room.js'

import { verfiyAdmin } from '../util/verifyToken.js';

const router = express.Router();   // here we use router in his app when hi take router from express


router.post("/:hotelId" ,verfiyAdmin , createRoom)

router.put("/:id" , verfiyAdmin ,updateRoom)
   
router.delete("/:hotelID/:id" ,verfiyAdmin , DeleteRoom )

router.get("/" , getRoom) 
//if we need only one hotel name
router.get("/all" , getAllRoom)



// if need of all hotel



export default router;