import { sql } from "../config/db.js";



//a function to get all products
export const getProducts = async (req, res) => {
    try{
        const products = await sql`
        SELECT * FROM products
        ORDER BY created_at DESC`

        res
        .status(200)
        .json({
            sucesss:true,
            data:products
        })
    }

    catch(error){
        console.log("Error in getProducts function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}


//a function to get a single product by id
export const getProduct = async(req, res) => {
    const {id} = req.params;

    try{
        const product = await sql`
        SELECT * FROM products WHERE id = ${id}`

        res
        .status(200)
        .json({
            success:true,
            data:product[0]
        })
    }

    catch(error){
        console.log("Error in getProduct function", error);
        res
        .status(500)
        .json({ 
            success: false, 
            message: "Internal Server Error" });
    }
}

//a function to create a new product
export const createProduct = async (req, res) => {
    const {name, price, image} = req.body;

    if(!name || !price || !image){
        return res
        .status(400)
        .json({
            success:false, 
            message:"Please provide name, price and image"})
    }

    try{
        const newProduct = await sql `
        INSERT INTO products (name, price, image)
        VALUES(${name}, ${price}, ${image})
        RETURNING *`

        res
        .status(201)
        .json({
            success:true,
            data:newProduct[0]
        })
    }

    catch(error){
        console.log("Error in createProduct function", error);
        res
        .status(500)
        .json({ 
            success: false, 
            message: "Internal Server Error" });
    }
}

//a function to update a product by id
export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const {name, price, image} = req.body;

    try{
        const updatedProduct = await sql `
        UPDATE products
        SET name = ${name}, price = ${price}, image = ${image}
        WHERE id = ${id}
        RETURNING *`

        
        if(updatedProduct.length === 0){
            return res
            .status(404)
            .json({
                success:false,
                message:"Product not found"
            })
        }

        res
        .status(200)
        .json({
            success:true,
            data:updatedProduct[0]
        })
    }

    catch(error){
        console.log("Error in updateProduct function", error);
        res
        .status(500)
        .json({ 
            success: false, 
            message: "Internal Server Error" });
    }
}

//a function to delete a product by id
export const deleteProduct = async (req, res) => {
    const {id} =req.params
    

    try{
        const deletedProduct = await sql `
        DELETE FROM products
        WHERE id = ${id}
        RETURNING *`

        if(deletedProduct.length === 0){
            return res
            .status(404)
            .json({
                success:false,
                message:"Product not found"
            })
        }

        res
        .status(200)
        .json({
            success:true,
            message:"Product deleted successfully"
        })
    }

    catch(error){
        console.log("Error in deleteProduct function", error);
        res
        .status(500)
        .json({ 
            success: false, 
            message: "Internal Server Error" });
    }
}