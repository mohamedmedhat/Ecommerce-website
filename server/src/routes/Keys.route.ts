import express from "express";
import { getPaypal } from "../controllers/Keys.controller";

const router = express.Router();

router.get("/paypal", getPaypal);

export { router as KeysRouters };
