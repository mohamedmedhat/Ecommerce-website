import express from "express";
import { SignIn, SignUp, UpdateProfile } from "../controllers/Users.controller";
import { isAuth } from "../utils";

const router = express.Router();

router.post("/signin", SignIn);
router.post("/signup", SignUp);
router.put("/profile", isAuth, UpdateProfile);

export { router as UsersRouters };
