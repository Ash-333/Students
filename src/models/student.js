const express=require('express');
const mongoose = require('mongoose');

const studentSchema=new mongoose.Schema({
    roll:{
        type:Number,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true
    },
    branch:{
        type:String,
        require:true
    }
})

const StudentSchema=new mongoose.model("StudentSchema",studentSchema)
module.exports=StudentSchema