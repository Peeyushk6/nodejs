const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port,()=>{
    console.log('Server is up on port '+port)
})
















































//Without middleware :- new request ->Run route handler

//With middleware :- new request ->do something -> run route handler


// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () =>{
//     // const task = await Task.findById('6369fb8d9d0a6bb0bcd3b069')
//     // await task.populate('owner')
//     // console.log(task.owner.email)

//     const user = await User.findById('6369f8f11680a5c9f9a53980')
//     await user.populate('myTasks')
//     console.log(user.tasks)
// }

// main()




// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse')
//     console.log(token);
// }

// myFunction()



// const pet = {
//     name:'hal'
// }

// pet.toJSON = function () {
//     // console.log(this);
//     return this
// }
// console.log(JSON.stringify(pet))
















// app.post('/users',async (req,res)=>{
//     const user = new User(req.body)

//     try{
//         await user.save();
//         res.status(201).send(user);
//     }
//     catch(e){
//         res.status(400).send(e);;
//     }
// })

// app.get('/users',async (req,res)=>{

//     try{
//         const user = await User.find({});
//         res.send(user);
//     }
//     catch(e){
//         res.status(500).send(e);
//     }
// })

// app.get('/users/:id',async(req,res)=>{
//     const _id = req.params.id;

//     try{
//         let user = await User.findById(_id);
//         if(!user){
//             return res.status(404).send();
//         }
//         res.send(user);
//     }
//     catch(e){
//         res.status(500).send(e);
//     }
// })

// app.post('/tasks',async(req,res)=>{
//     const task = new Task(req.body)
//     try{
//         await task.save();
//         res.status(201).send(task);
//     }
//     catch(e){
//         res.status(400).send(e);
//     }
// })

// app.get('/tasks',async (req,res)=>{
//     try{
//         const tasks = await Task.find({});
//         res.send(tasks)
//     }
//     catch(e){
//         res.status(500).send();
//     }
// })

// app.get('/tasks/:id',async(req,res)=>{
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

// app.patch('/users/:id',async(req,res)=>{
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ['name','email','password','age'];
//     const isValidationOperation = updates.every((update)=> allowedUpdates.includes(update))

//     if(!isValidationOperation){
//         return res.status(400).send({error:'Invalid updates'})
//     }
//     try{
//         const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
//         if(!user){
//             return res.status(404).send();
//         }

//         res.send(user);
//     }
//     catch(e)
//     {
//         res.status(400).send(e);
//     }
// })

// app.patch('/tasks/:id',async(req,res)=>{
//     const updates = Object.keys(req.body)
//     console.log(updates);
//     const allowedUpdates=['description','completed']
//     const isValidOperation = updates.every((update)=>allowedUpdates.includes(update));

//     if(!isValidOperation){
//         return res.status(400).send({error:'Invalid updates'})
//     }

//     try{
//         const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

//         if(!task){
//             return res.status(400).send()
//         }

//         res.send(task)
//     }catch(e){
//         res.status(400).send(e);
//     }
// })


// app.delete('/users/:id',async(req,res)=>{
//     try{
//         const user = await User.findByIdAndDelete(req.params.id)

//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     }
//     catch(e){
//         res.status(500).send()
//     }
// }
// )

// app.delete('/tasks/:id',async(req,res)=>{
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




//Disabling the type of requests
// app.use((req,res,next)=>{
//     if(req.method === 'GET')
//     {
//         res.send('GET requests are disabled')
//     }
//     else{
//         next()
//     }
    
//     //next();//to know we are done with the middleware function 
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down.Check back soon!')
// })



//Creating the image folder and saving the files
// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// },(error, req, res, next)=>{
//     res.status(400).send({error:error.message})
// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req, file , cb){
//         //regular expression to match
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }
        
//         cb(undefined, true)
//     }
// })
