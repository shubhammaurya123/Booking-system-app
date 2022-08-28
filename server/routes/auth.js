import express from 'express';  // we add express libery

import { login , register } from '../controllers/auth.js';
const router = express.Router();   // here we use router in his app when hi take router from express

router.post("/register" , register);
router.post("/login" , login);

export default router;