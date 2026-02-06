// this keyword only works in objects, it doesn't work in functions
// 'use strict';
// const chai = function(){
//     let username = "chai"
//     //console.log(this.username);
//     console.log(this); 
// }
// chai();

//object 
// const user = {
//     username: "Meg",
//     age: 20,
//     WelcomeMessage : function(){
//         console.log( `${this.username}, welcome to Website`);
//         //console.log(this) talks about current context or values
//     }
    
// }
// user.WelcomeMessage()
// user.username = "meghana"
// user.WelcomeMessage()
// console.log(this);

// const fun = () => {
//     let username = "megh";
//     console.log(this.username);
// }
// fun();
// arrows functions cant access this keyword, unlike regular functions

// Arrow Functions
// const addTwoNumbers = (num1,num2) => {
//     return num1+num2
// } 
// console.log(addTwoNumbers(2,3)) 

// const addTwoNumbers = (num1,num2) => num1+num2
// console.log(addTwoNumbers(2,3))

// const addTwoNumbers = (num1,num2) => (num1+num2)
// console.log(addTwoNumbers(2,3))
