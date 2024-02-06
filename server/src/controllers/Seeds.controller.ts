import { Request, Response } from "express";
import { ProductModel } from "../models/Product.model";
import { sampleProducts, sampleUsers } from "../data";
import { UserModel } from "../models/User.model";

// [get] http://localhost:PORT/api/v1/seeds/
export const InsertInModels = async (req: Request, res: Response) => {
  await ProductModel.deleteMany({});
  const createProducts = await ProductModel.insertMany(sampleProducts);

  await UserModel.deleteMany({});
  const createUsers = await UserModel.insertMany(sampleUsers);

  res.json({ createProducts, createUsers });
};
