import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productController.js";

//router
const router = express.Router();

//get all products
router.get("/",getProducts);

//get a single product by id
router.get("/:id", getProduct);

//create a new product
router.post("/", createProduct);

//update a product by id
router.put("/:id", updateProduct);

//delete a product by id
router.delete("/:id", deleteProduct);

export default router;