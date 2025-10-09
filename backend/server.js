import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

//load environment variables from .env file
dotenv.config();

//initialize express
const app = express();
const PORT = process.env.PORT;;

//json middleware for parsing JSON request bodies
app.use(express.json());

//cors middleware for handling Cross-Origin Resource Sharing
app.use(cors());

//helmet middleware for security by setting various HTTP headers
app.use(helmet());

//morgan middleware for logging HTTP requests
app.use(morgan("dev"));

//import routes
app.use('/api/products', productRoutes)

//listen for requests
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})