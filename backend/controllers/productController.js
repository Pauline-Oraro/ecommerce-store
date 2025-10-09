//a function to get all products
export const getProducts = async (req, res) => {
    res.send("get all products");
}


//a function to get a single product by id
export const getProduct = async(req, res) => {
    res.send("get a single product");
}

//a function to create a new product
export const createProduct = async (req, res) => {
    res.send("create a new product");
}

//a function to update a product by id
export const updateProduct = async (req, res) => {
    res.send("update a product");
}

//a function to delete a product by id
export const deleteProduct = async (req, res) => {
    res.send("delete a product");
}