import express, { Request, Response } from 'express';
require('dotenv').config()
const app = express();
const port = 3000;
import fs from 'fs'
import path from 'path'
const pathToRoutes = path.join(__dirname,'./routes/filePath')
console.log(pathToRoutes)



import { user } from './routes/pathURL';
import { userController } from './controllers/user';
import { fileOne,fileTwo } from './routes/filePath';
app.use(userController)

app.get('/', (req: Request, res: Response) => {
  // import file from './routes/filePath'
  fs.readFile(fileOne,'utf-8',(err,data)=>{
    if(err) throw err
    else res.send(data)
  })
  // res.send(text);
});

app.post('/', (req: Request, res: Response) => {
  // import file from './routes/filePath'
  fs.readFile(fileTwo,'utf-8',(err,data)=>{
    if(err) throw err
    else res.send(data)
  })
  // res.send(text);
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // console.log(process.env);
  console.log(process.env.DOCKER_DATABASE_URL);
});
