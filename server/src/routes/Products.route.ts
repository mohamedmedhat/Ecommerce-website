import express from "express";
import {
  findByCategory,
  findBySlug,
  findProduct,
} from "../controllers/Products.controller";

const router = express.Router();

router.get("/", findProduct);
router.get("/categories", findByCategory);
router.get("/slug/:slug", findBySlug);

export { router as ProductsRouters };
