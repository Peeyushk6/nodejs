const add = (a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}

// add(1,2).then((sum)=>{
//     console.log(sum)

//     add(sum,2).then((sum)=>{
//         console.log(sum)
//     }).catch((e)=>{
//         console.log(e);
//     })

// }).catch((e)=>{
//     console.log(e);
// })

//Promise Chaining

add(1,2).then((sum)=>{
    console.log(sum);
    return add(sum,4);
}).then((sum2)=>{
    console.log(sum2)
})