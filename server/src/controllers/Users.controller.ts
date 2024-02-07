import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import { UserModel } from "../models/User.model";
import { generateToken } from "../utils";

// [post] http://localhost:PORT/api/v1/users/signin
export const SignIn = async (req: Request, res: Response) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (user) {
    if (bcryptjs.compareSync(req.body.password, user.password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(404).json({ msg: "wrong credential" });
};

// [post] http://localhost:Port/api/v1/users/signup
export const SignUp = async (req: Request, res: Response) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user) {
    const newUser = await UserModel.create({
      name: req.body.name,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password),
    });
    res.json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser),
    });
  }
  res.status(400).json({ msg: "wrong credential" });
};

// [put] http://localhost:Port/api/v1/users/profile
export const UpdateProfile = async (req: Request, res: Response) => {
  const user = await UserModel.findById(req.body._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = bcryptjs.hashSync(req.body.password, 8);
    }

    const updatedUser = await user.save();
    res.send({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser),
    });
    return;
  }

  res.status(404).json({ msg: "wrong credential" });
};
