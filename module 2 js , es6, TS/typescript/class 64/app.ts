// var price: number  = Number('10')

// var result = price + 0.15

// var phoneNumber: string | number | undefined = '123'

// var arr: (string | number | boolean)[] = [1,true]
//typer interfaces
interface stdTypes {
  sec?: string;
  fName?: string;
  phoneNumber: string | number;
  isActive: boolean;
  rollNo?: string | number;
  teacherName?: string | undefined;
}

var std1: stdTypes = {
  fName: "minhaj",
  phoneNumber: "234",
  isActive: true,
  sec: "A",
  rollNo: "3434",
};

var std2: stdTypes = {
  fName: "minhaj",
  phoneNumber: "234",
  isActive: true,
};

var td1: stdTypes = {
  teacherName: "ali",
  phoneNumber: "234",
  isActive: true,
};

function addition(num1: number, num2: number): number {
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


function greet(name1: string | number, name2: string| number): string| number {
    return (`hello  ${name1} and ${name2}`) 
  }
  greet("ali", "imran");

// var score: number  | undefined
// console.log(score)
// console.log('a' * 5)
//any
var a: any
a= 3