const express =require('express')
const Products=require('./data/product')
const app = express()
app.get("/",(req,res)=>{
    res.send("API is Running");
})
app.get("/api/products",(req,res)=>{
    res.send(Products);
})
app.get("/api/product/:id",(req,res)=>{
    const product =Products.find((p)=>p._id =req.params.id)
    res.send(product);
})
app.listen(4000,console.log("Listen port at 4000"))