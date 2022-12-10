require('../src/db/mongoose');

const { countDocuments } = require('../src/models/task');
const User = require('../src/models/user');

// //63628b4387a6488cd43b8509
// User.findByIdAndUpdate('63623f1ac4d1eeb891f0ee5c',{ age: 10}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 10})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e);
// })

// const updateAgeAndCount = async(id,ages)=>{
//     const user = await User.findByIdAndUpdate(id,{age:ages});
//     const count = await User.countDocuments({age:ages})
//     return count
// }

//Same as above
const updateAgeAndCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age});
    const count = await User.countDocuments({age})
    return count
}



updateAgeAndCount('6373a85407006123d97472fd',17).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})