import express from "express"
import { Product } from "../model/product.model.js";
import { getProducts,getProduct,createProduct,updateProduct,deleteProduct } from "../controller/product.controller.js";


const router = express.Router()


router.get("/",getProducts)
router.get("/:id",getProduct)

router.post("/",createProduct)

//update a product
router.put("/:id",updateProduct)

//delete a product
router.delete("/:id",deleteProduct)


export default router



