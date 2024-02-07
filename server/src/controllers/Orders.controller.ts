import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { OrderModel } from "../models/Order.model";
import { Product } from "../models/Product.model";

// [get] http://localhost:PORT/api/v1/orders/mine
export const findOrder = asyncHandler(async (req: Request, res: Response) => {
  const orders = await OrderModel.find({ user: req.user._id });
  res.json(orders);
});

// [get] http://localhost:PORT/api/v1/orders/:id
export const findOrderById = asyncHandler(
  async (req: Request, res: Response) => {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: "Order Not Found" });
    }
  }
);

// [post] http://localhost:PORT/api/v1/orders/
export const CreateOrder = asyncHandler(async (req: Request, res: Response) => {
  if (req.body.orderItems.length === 0) {
    res.status(400).json({ message: "Cart is empty" });
  } else {
    const createdOrder = await OrderModel.create({
      orderItems: req.body.orderItems.map((x: Product) => ({
        ...x,
        product: x._id,
      })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });
    res.status(201).json({ message: "Order Created", order: createdOrder });
  }
});

// [put] http://localhost:PORT/api/v1/orders/:id/pay
export const updateOrder = asyncHandler(async (req: Request, res: Response) => {
  const order = await OrderModel.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = new Date(Date.now());
    order.paymentResult = {
      paymentId: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };
    const updatedOrder = await order.save();

    res.send({ order: updatedOrder, message: "Order Paid Successfully" });
  } else {
    res.status(404).json({ message: "Order Not Found" });
  }
});
