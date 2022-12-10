const request = require("request");

request({
    url: "https://api.postalpincode.in/pincode/560001",
    Json: true
}, (err, response, body) => {
    console.log(body);
})