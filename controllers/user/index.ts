import express, { Request, Response } from "express";
import path from "path";
import { user } from "../../routes/pathURL";
import { UserModel } from "../../dist/models/dataBaseURL";
const userController = express();
require("dotenv").config();

userController.get(`${user.url}`, async (req: Request, res: Response) => {
  const id = req.params.id;
  const List = await UserModel.find();
  console.log(List);
  res.send(List);
});

userController.post(`${user.url}`, async (req: Request, res: Response) => {
  const Userid = req.body && req.body.id ? req.body.id : null;
  const UserEmail = req.body && req.body.email ? req.body.email : null;
  const UserPassword = req.body && req.body.password ? req.body.password : null;
  if (!Userid || !UserEmail || !UserPassword) {
    res.status(400).send("Bad Request");
    return;
  } else {
    const newUser = new UserModel({
      email: UserEmail,
      password: UserPassword,
      userName: Userid,
    });
    await newUser.save()
    res.send(newUser)
  }
});

export { userController };
