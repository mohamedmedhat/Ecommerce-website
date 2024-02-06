import express from "express";
import { SignIn, SignUp, UpdateProfile } from "../controllers/Users.controller";

const router = express.Router();

router.post("/signin", SignIn);
router.post("/signup", SignUp);
router.put("/profile", UpdateProfile);

export { router as UsersRouters };
