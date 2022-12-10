
// const pet = {
//     name:'hal'
// }

const multer = require("multer")

// pet.toJSON = function () {
//     // console.log(this);
//     return this
// }
// console.log(JSON.stringify(pet))














// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'a123'}, 'thisismynewcourse')
//     console.log(token);
// }

// myFunction()






// const jsoo = {
//     "a":"dfd",
//     "b":32,
//     "c": fewakn()
// }
// console.log(typeof(jsoo))
// const jso = JSON.stringify(jsoo)
// console.log(typeof(jso))
// console.log(jso)
// console.log(jso.a,jso.b,jso.c)

// const js = JSON.parse(jso);
// console.log(typeof(js))
// console.log(js)

// function fewakn(){
//     console.log("Hello fewakn")
//     return "Hello"
// }


const upload = multer({
    dest: 'avatars'
})
console.log(typeof(upload))
console.log(typeof(upload.single()))
console.log(typeof(multer))