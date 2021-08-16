const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://ashish:45h15h@cluster0.ggf2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection is successfull");
}).catch(()=>{
    console.log("no connection");
})

