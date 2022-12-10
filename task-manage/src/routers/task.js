const express = require('express');
const Task = require('../models/task')
const auth = require('../middleware/auth');
const { rawListeners } = require('../models/user');
const { SUPPORTS } = require('mongodb/lib/utils');
const router = new express.Router();

router.post('/tasks', auth ,async(req,res)=>{
    //const task = new Task(req.body)

    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    
    try{
        await task.save();
        res.status(201).send(task);
    }
    catch(e){
        res.status(400).send(e);
    }
})

// Filter - GET /tasks?completed=true
//pagination - GET /tasks?limit=10&skip //limits the noi of info to be displayed
//sorting  GET /tasks?sortBy=createdAt_asc || createdAt_desc 

router.get('/tasks', auth ,async (req,res)=>{
    const match = {}    
    const sort={}

    // req.query.completed is a string the below if conditions sets it to true or false
    if(req.query.completed){
        match.completed = req.query.completed === 'true'
    }

    if(req.query.sortBy){
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
      }
    try{
        await req.user.populate({
            path:'tasks',
            match,
            options:{
                limit: parseInt(req.query.limit),
                skip:parseInt(req.query.skip),
                sort
                // sort:{
                //     // createdAt: -1
                //     completed:1
                // }
            }
        })
        res.send(req.user.tasks)
    }
    catch(e){
        res.status(500).send();
    }
})

router.get('/tasks/:id', auth ,async(req,res)=>{
    const _id = req.params.id;

    try{
        const task = await Task.findOne({ _id, owner:req.user._id})
        if(!task){
            res.status(404).send()
        }
        res.send(task)
    }
    catch(e)
    {
        res.status(500).send()
    }
})

router.patch('/tasks/:id',auth,async(req,res)=>{
    const updates = Object.keys(req.body)
    console.log(updates);
    const allowedUpdates=['description','completed']
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update));

    if(!isValidOperation){
        return res.status(400).send({error:'Invalid updates'})
    }

    try{
        const task = await Task.findOne({_id:req.params.id,owner:req.user._id})

        if(!task){
            return res.status(400).send()
        }
        
        updates.forEach((update)=>task[update]=req.body[update]);
        await task.save();
        res.send(task)
    }catch(e){
        res.status(400).send(e);
    }
})

router.delete('/tasks/:id',auth,async(req,res)=>{
    try{

        const task = await Task.findOneAndDelete({ _id:req.params.id, owner:req.user._id})

        if(!task){
            res.status(404).send()
        }
        res.send(task);
    }
    catch(e){
        res.status(500).send();
    }
})

module.exports= router;



















// router.get('/tasks',async (req,res)=>{
//     try{
//         const tasks = await Task.find({});
//         res.send(tasks)
//     }
//     catch(e){
//         res.status(500).send();
//     }
// })

// router.get('/tasks/:id',async(req,res)=>{
//     let _id = req.params.id;

//     try{
//         const task=await Task.findById(_id);
//         if(!task){
//             res.status(404).send()
//         }
//         res.send(task)
//     }
//     catch(e)
//     {
//         res.status(500).send()
//     }
// })

// router.patch('/tasks/:id',async(req,res)=>{
//     const updates = Object.keys(req.body)
//     console.log(updates);
//     const allowedUpdates=['description','completed']
//     const isValidOperation = updates.every((update)=>allowedUpdates.includes(update));

//     if(!isValidOperation){
//         return res.status(400).send({error:'Invalid updates'})
//     }

//     try{
//         // const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

//         const task = await Task.findById(req.params.id);

//         updates.forEach((update)=>task[update]=req.body[update]);
//         await task.save();
//         if(!task){
//             return res.status(400).send()
//         }

//         res.send(task)
//     }catch(e){
//         res.status(400).send(e);
//     }
// })

// router.delete('/tasks/:id',async(req,res)=>{
//     try{
//         const task = await Task.findByIdAndDelete(req.params.id)

//         if(!task){
//             res.status(404).send()
//         }
//         res.send(task);
//     }
//     catch(e){
//         res.status(500).send();
//     }
// })

// module.exports= router;


