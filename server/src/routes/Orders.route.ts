import express from "express";
import {
  CreateOrder,
  findOrder,
  findOrderById,
  updateOrder,
} from "../controllers/Orders.controller";
import { isAuth } from "../utils";

const router = express.Router();

router.get("/mine", isAuth, findOrder);
router.get("/:id", isAuth, findOrderById);
router.post("/", isAuth, CreateOrder);
router.put("/:id/pay", isAuth, updateOrder);

export { router as OrdersRouters };
