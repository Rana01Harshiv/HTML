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