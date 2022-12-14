// const doWorkCallback = (callback) =>{
//     setTimeout(()=>{
//         callback(undefined,[1,2,4])
//         // callback('This is a error',undefined)
//     },2000)
// }

// doWorkCallback((error,result)=>{
//     if(error){
//         return console.log(error);
//     }
//     console.log(result);
// })

const doWorkPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve([7,4,1])
        reject('Things went wrong')
    },2000)
})

doWorkPromise.then((result)=>{
    console.log('Success!',result)
}).catch((error)=>{
    console.log('Error!',error)
})