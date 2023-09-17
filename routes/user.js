import express from "express"; // if we write in{} then it will not take entire express module only the express function
import { getAllUsers, register, getMyProfile, login ,logout} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all",getAllUsers);

router.post("/new",register);

router.post("/login",login);

router.get("/logout",logout);

router.get("/me",isAuthenticated,getMyProfile);
 

export default router; 
