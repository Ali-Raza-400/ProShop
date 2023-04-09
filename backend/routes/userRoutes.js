import express from "express";
const router = express.Router();
import { authUser, getUser, registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route('/').post(registerUser)
router.route("/login").post(authUser);
router.route("/profile").get(protect,getUser);

export default router;
