import { Request, Response } from "express";
import { ProductModel } from "../models/Product.model";

// [get] http://localhost:PORT/api/v1/products/
export const findProduct = async (req: Request, res: Response) => {
  const products = await ProductModel.find();
  res.json(products);
};

// [get] http://localhost:PORT/api/v1/products/categories
export const findByCategory = async (req: Request, res: Response) => {
  const category = await ProductModel.find().distinct("category");
  res.json(category);
};

// [get] http://localhost:PORT/api/v1/products/slug/:slug
export const findBySlug = async (req: Request, res: Response) => {
  const product = await ProductModel.findOne({ slug: req.params.slug });
  product
    ? res.json(product)
    : res.status(404).json({ msg: "Product Not Found" });
};
