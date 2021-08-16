const express=require("express")
const router=express.Router();
const Student=require("../models/student")


//upload data of student
router.post('/student',async(req,res)=>{
    try {
        const addStudent= new Student(req.body)
        console.log(req.body)
        
        const insertStudent =await addStudent.save();
        //res.send(insertStudent)
        res.json('Studednt added Successfully');
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: `Student could not be uploaded  ${error}`
        })
    }
})
//read data of all students
router.get('/student/all',async(req,res)=>{
    try {
        const getStudent= await Student.find({}).sort({"roll":1});
        res.status(200).send(getStudent)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: `Students not found  ${error}`
        })
    }
})

//read data of single students
router.get('/student/:id',async(req,res)=>{
    try {
        const _id=req.params.id
        const getStudent= await Student.findById(_id);
        res.status(200).send(getStudent)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: `Student could not be found    ${error}` 
        })
    }
})

//update data of student
router.patch('/student/:id',async(req,res)=>{
    try {
        const _id=req.params.id
        const getStudent= await Student.findOneAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).send(getStudent)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

//delete data of student
router.delete('/student/:id',async(req,res)=>{
    try {
        const _id=req.params.id
        const getStudent= await Student.findOneAndDelete(_id,req.body);
        res.status(201).send(getStudent)
    } catch (error) {
        console.log(error)
        res.status(500).send()
    }
})

module.exports=router;
