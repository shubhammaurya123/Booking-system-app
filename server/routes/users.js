import express from "express"; // we add express libery
import {
  updateUsers,
  DeleteUsers,
  getAllUsers,
  getUsers,
} from "../controllers/users.js";

import { verfiyToken  ,  verfiyAdmin , verfiyUser} from "../util/verifyToken.js";

const router = express.Router(); // here we use router in his app when hi take router from express
// router.get("/checktoken", verfiyToken, (req, res, next) => {
//    res.status(200).send("you are login");
// });

router.put("/:id",verfiyUser ,  updateUsers);

router.delete("/:id",verfiyUser,  DeleteUsers);

router.get("/", verfiyUser, getUsers);
//if we need only one usre name
router.get("/all",verfiyUser ,  getAllUsers);

export default router;
