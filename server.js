const express = require("express");
const cors = require("cors");

const app = express();

let coroption = {
  origin: "http://localhost:8081",
};

app.use(express.json());
const router=require('./routes/ProductRouter')

app.use('/api/products',router)

//middleware
app.use(cors(coroption));

app.use(express.urlencoded({ exenteded: true }));


// testing

app.get('/',(req,res)=>{
    res.json({messgae:'this is from api'})
})

const port=process.env.port || 8080


app.listen(port,()=>{
    console.log(`server listening to ${port}`)
})