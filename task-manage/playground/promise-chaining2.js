require('../src/db/mongoose')
const { count } = require('../src/models/task')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('636292201c907abc863ee991').then((task) =>{
//     console.log(task);
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:true})
    return task;
}

deleteTaskAndCount('6373a85407006123d97472fd').then((count)=>{
    console.log(count);
})
.catch((e)=>{
    console.log('error',e)
})