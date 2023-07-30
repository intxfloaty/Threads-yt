import express from "express"
import { loginUser, logoutUser, signupUser, followUnfollowUser } from "../controller/userController.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router()

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser)

router.post("/follow/:id", protectRoute, followUnfollowUser)

export default router;