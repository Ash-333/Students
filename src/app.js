const express=require('express')
require("../src/db/conn")
const app=express()
const Student=require('../src/models/student')
const router=require('../src/routes/studentRoute')

app.use(express.json())
app.use(router)
const port = process.env.PORT || 3000;

app.get("/",async(req,res)=>{
    res.send("Hello world")
})


app.listen(port,()=>{
    console.log(`Console is live at port no.${port}`);
})