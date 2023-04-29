import express from "express";
import color from 'colors'
import dotenv from "dotenv";
import ConnectDB from "./conn/db.js";
import morgan from "morgan";
dotenv.config();
const app = express();
if(process.env.NODE_ENV==='developement'){
  app.use(morgan('dev'))
}
app.use(express.json())
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRouters.js'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
ConnectDB();
app.use("/api/products",productRoutes)
app.use("/api/user",userRoutes)
app.use("/api/orders",orderRoutes)
app.use(notFound)
app.use(errorHandler)
const port = process.env.PORT || 4000;
app.listen(
  4000,
  console.log(`Listen port in ${process.env.NODE_ENV} at ${port}`.yellow.bold )
);
