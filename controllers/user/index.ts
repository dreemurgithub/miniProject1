import express, { Request, Response } from 'express';
import path from 'path'
const userController = express();
require('dotenv').config()
const pathToRoutes = path.join(__dirname,'./routes/filePath')
console.log(pathToRoutes)

export {userController}