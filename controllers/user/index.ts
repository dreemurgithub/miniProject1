import express, { Request, Response } from 'express';
import path from 'path'
import { user } from '../../routes/pathURL';
const userController = express();
require('dotenv').config()


userController.get(`${user.url}/:id`, (req: Request, res: Response) => {
    const id = req.params.id
    res.send(`${user.url}/:${id}`);
  });
  

export {userController}