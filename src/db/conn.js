const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/students",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is successfull");
}).catch(()=>{
    console.log("no connection");
})

