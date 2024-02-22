console.log("hello harshiv !");
console.log("this is rana here!");
console.log("here you learning the js");

// variables
// a and A both are different
// "$" " _"  we can start the variable name 

name = "raaaaa";
console.log(name);
x = null;
console.log(x);
y = undefined;
console.log(y);
a = true;
console.log(a);

// var let const 

var name = "rana"
console.log(name);
name = "harshiv";
console.log(name);  // can be change
var name = "patel";
console.log(name);  // can be redeclared


let age = 20;
console.log(age);
age = 26;
console.log(age);  // can be change but can't be re declared agian

const study = "mca";
console.log(study);  // can't be change or cant't be re declared agian

// it is better practise to use the let for declare the variable in js 


// scope wise declarations

{
    let age = 20;
    console.log(age);
}

{
    let age = 30;
    console.log(age);
    typeof age;
}

const cricketer = {
    name:"dhoni",
    age : 45,
    role:"wk-batsman",

};

console.log(cricketer.age);

// loops 

// for(let i=1;i<=10;i++){
//     console.log("Hii Harshiv!");
// }

// while loop 
// let i = 1;
// while(i<=10){
//     console.log("Hii Harshiv!");
// }

// do while loop
// let i = 1; 
// do{
//      console.log("Hii Harshiv!");
//     i++;
// }while(i<=5);


// for of loop
// let str = "harshiv";
// let length = 0; 
// for(let i of str){
//     console.log(i);
//     length++;
// }
// console.log("size is: ",length);

// for in loop 
// let player = {

//     name: "kohli",
//     age : 24,
//     pos : "bat",

// };

// for (let key in player){
//     console.log(key,"= ",player[key]);
// }

// print all the even numbers between 1 to 100
// for(let i=0;i<=100;i++){
    
//     if(i%2==0){
//         console.log(i);
//     }
    
// }


// guessing number game 
let guessnum = 20;
let res = prompt("Enter the guessing number ");

while(res != guessnum){
    res = prompt("You enter the wrong number ! enter again");
}
console.log("congratuation you enter the right number !");