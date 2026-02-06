//truthy and falsy values
// if empty string is there then it is false
// if empty array is there then it is true
// const userEmail = "meg@gmail.com"
// if(userEmail){
//     console.log("email exists");
// }
// else{
//     console.log("email doesn't exist");
// }
//falsy values: false, 0, -0, "", null, undefined, NaN
//truthy values: anything that is not falsy
// examples: "0", "hello", [], {}, 42, true, 'false' (non-empty string), " " (string with space), function(){} (non-empty function) etc.

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("empty object");
}