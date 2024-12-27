import express from 'express';
import dotenv from "dotenv"
import cors from "cors"
import connectDB from './src/db/index.js';
import todoRoutes from "./src/routes/todos.routes.js"


dotenv.config()
const app = express();



app.use(express.json())
app.use(cors())

//routes Api
app.use('/api/v1' , todoRoutes)






connectDB();
connectDB()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log("MONGO DB connection failed !!! ", err);
});