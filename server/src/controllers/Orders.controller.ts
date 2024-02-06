import { Request, Response } from "express";

// [get] http://localhost:PORT/api/v1/orders/mine
export const findOrder = async (req: Request, res: Response) => {};

// [get] http://localhost:PORT/api/v1/orders/:id
export const findOrderById = async (req: Request, res: Response) => {};

// [post] http://localhost:PORT/api/v1/orders/
export const CreateOrder = async (req: Request, res: Response) => {};

// [put] http://localhost:PORT/api/v1/orders/:id/pay
export const updateOrder = async (req: Request, res: Response) => {};
