import express, { Request, Response } from "express";
require("dotenv").config();
const app = express();
const port = 3000;
import crypto from "crypto";
import fs from "fs";
import path from "path";
const pathToRoutes = path.join(__dirname, "./routes/filePath");
console.log(pathToRoutes);

import { user } from "./routes/pathURL";
import { userController } from "./controllers/user";
import { fileOne, fileTwo } from "./routes/filePath";
app.use(express.json());
app.use(userController);

app.get("/", (req: Request, res: Response) => {
  // import file from './routes/filePath'
  fs.readFile(fileOne, "utf-8", (err, data) => {
    if (err) throw err;
    else {
      const hashedData = crypto
        .createHmac("sha256", `${process.env.HashKey}`)
        .update("sometext")
        .digest("hex");
      res.send(hashedData);
      const aa = data
      const a = 0;
    }
  });
  // res.send(text);
});

app.post("/", (req: Request, res: Response) => {
  // import file from './routes/filePath'
  fs.readFile(fileTwo, "utf-8", (err, data) => {
    if (err) throw err;
    else {
      const hashedData = crypto
        .createHmac("sha256", `${process.env.HashKey}`)
        .update(req.headers.authorization ? req.headers.authorization : 'sometext') 
        .digest("hex");
      const aa = data
      const authString = req.headers.authorization
      res.send(hashedData);
      const a = 0;
    }
  });
  // res.send(text);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // console.log(process.env);
  console.log(process.env.DOCKER_DATABASE_URL);
});
