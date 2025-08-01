import  express from "express"
import mongoose from "mongoose"
import { Product } from "./model/product.model.js";
import  productRoute from  "./routes/product.route.js"
const  app = express();


//middleware
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));

//routes
app.use("/api/product",productRoute)


app.get("/",(req,res)=>{
   res.send("hello from node api")
})




mongoose.connect(`mongodb+srv://vadchhakyashh:VWa2Rd7wjuXJ4vp0@crudapi.ucuhkyz.mongodb.net/crudapi`)
.then(()=>{
    console.log("Connected to database")
    app.listen(8000,()=>{
    console.log(`server is running on port 8000`)
});

})
.catch(()=>{
    console.log("Connection failed")
})