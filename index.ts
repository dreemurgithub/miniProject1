import express, { Request, Response } from 'express';
require('dotenv').config()
const app = express();
const port = 3000;
import path from 'path'
const pathToRoutes = path.join(__dirname,'./routes/filePath')
console.log(pathToRoutes)
console.log(pathToRoutes)



import { user } from './routes/pathURL';
// import { userController } from './controllers/user';
// app.use(userController)

app.get('/', (req: Request, res: Response) => {
  // import file from './routes/filePath'
  res.send('hello');
});

app.get(`${user.url}/:id`, (req: Request, res: Response) => {
  const id = req.params.id
  res.send(user.id(id));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // console.log(process.env);
  console.log(process.env.DOCKER_DATABASE_URL);
});
