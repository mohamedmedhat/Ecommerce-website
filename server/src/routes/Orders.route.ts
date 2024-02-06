import express from "express";
import {
  CreateOrder,
  findOrder,
  findOrderById,
  updateOrder,
} from "../controllers/Orders.controller";

const router = express.Router();

router.get("/mine", findOrder);
router.get("/:id", findOrderById);
router.post("/", CreateOrder);
router.put("/:id/pay", updateOrder);

export { router as OrdersRouters };
