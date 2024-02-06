import { Request, Response } from "express";

// [get] http://localhost:PORT/api/v1/keys/paypal
export const getPaypal = async (req: Request, res: Response) => {
  await res.json({ clientId: process.env.PAYBAL_CLIENT_ID || "sb" });
};
