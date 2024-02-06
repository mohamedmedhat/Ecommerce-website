import express from "express";
import { InsertInModels } from "../controllers/Seeds.controller";

const router = express.Router();

router.get("/", InsertInModels);

export { router as SeedsRouters };
