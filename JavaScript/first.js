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

// let guessnum = 20;
// let res = prompt("Enter the guessing number ");

// while(res != guessnum){
//     res = prompt("You enter the wrong number ! enter again");
// }
// console.log("congratuation you enter the right number !");


// array 

// let marks=[20,39,68,90];
// console.log(marks);

// console.log("by using for each loop");
// marks.forEach(element =>{
//     console.log(element);
// });

// console.log("by using for loop");
// for (let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }
// console.log("by using for of loop");
// for (let i of marks){
//     console.log(i);
// }
// let sum=0;
// console.log("Average marks of array marks");
// for(let i=0;i<marks.length;i++){
//     sum += marks[i];
// }
// let avg = sum/marks.length;
// console.log("Total marks "+sum);
// console.log("Total Students "+marks.length);
// console.log("Average marks "+avg);

// // exercise 1
// let sub = ["eng","hindi","gujarati","science"];
// console.log("Making the upper case ");
// for(let i of sub){
//     console.log(i.toUpperCase());
// }

// // exercise 2
// let price = [200,400,500,600];
// for(let i=0;i<price.length;i++){
//     console.log(price[i]);
//     let temp = price[i] / 10;
//     console.log("Discount is:" + temp);
//     price[i] -= temp;
//     console.log("After Discount Price is: "+price[i]);
// }

// // method in arrays
// let nations = ["india","aus","wid","Pak"];
// console.log(nations);
// nations.push("afg","eng");
// console.log(nations);
// nations.pop("eng");
// console.log(nations);a
// console.log(nations.toString());

// functions and methods 

// function initializatioin

// function myfun(){
//     console.log("my first function");
// }
// // function calling
// myfun();

// function myfun1(msg){
//     console.log(msg);
// }
// // function calling
// myfun1("hello harshiv");

// // arraow function
// const myarraow = (a,b) =>{
//     console.log(a+b);
// }

// count the vowels with the arrow function
// const myvowels = (str) => {
//     let cnt =1;
//     for(let i of str){
//         if(i === 'a' ||i === 'e'||i === 'i'||i === 'o'||i === 'u' ){
//             cnt++;
//             break;
//         }
//     }
//     console.log("Total Vowels = " + cnt);
// }  


// function can be pass as an argument into another function also 

// function abc(){
//     console.log("harshiv");
// }

// function myfun(abc){
//     return abc;
// }

// let h2 = document.querySelector("h2");

// console.dir(h2);

// h2.innerText = h2.innerText + " harshiv here ";

let divs = document.querySelectorAll(".box");
divs[0].innerText = "new value to div 1";
divs[1].innerText = "something unique to div 2";
divs[2].innerText = "yeahhh finalyy we understood";
console.log(divs);


