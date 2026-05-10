"use strict";
// var price: number  = Number('10')
var std1 = {
    fName: "minhaj",
    phoneNumber: "234",
    isActive: true,
    sec: "A",
    rollNo: "3434",
};
var std2 = {
    fName: "minhaj",
    phoneNumber: "234",
    isActive: true,
};
var td1 = {
    teacherName: "ali",
    phoneNumber: "234",
    isActive: true,
};
function addition(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}
addition(6, 8);
//generics
// function dummy<T extends number>(num1: T, num2: T): T {
//   var a= (num1  + num2 ) as T
//   return a
// }
// dummy<number >(3, 5);
// function greet<M extends string>(name1: M, name2: M): M {
//   return (`hello  ${name1} and ${name2}`) as M
// }
// greet<string>("ali", "imran");
function greet(name1, name2) {
    return (`hello  ${name1} and ${name2}`);
}
greet("ali", "imran");
// var score: number  | undefined
// console.log(score)
// console.log('a' * 5)
//any
var a;
a = 3;
