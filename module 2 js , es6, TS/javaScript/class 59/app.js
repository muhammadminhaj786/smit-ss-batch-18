

// function foo(a) {
//     console.log("Hello World");
//     // return a
// }

// console.log(foo(10));

// arrow function

// var foo = (a)=> console.log("Hello World");

// foo(5);
// console.log(foo(5));

// callback function

// function greet(){
//     console.log("function 1");
// }

// function bye(greet){
//     console.log("function 2");
//     greet()
// }

// bye(greet);

// function awake(){
//     console.log("awake");
// }

// function pizza(){
//     setTimeout(()=>{
//         console.log("pizza is ready");
//         awake()
//     },3000)
// }

// pizza(awake)

// map

var arr = [1,2,3,4,5];
// var newArr = []
// for(var i=0; i<arr.length; i++){
//     newArr.push(arr[i]*2);
//     // console.log(arr[i]*2);
// }
// console.log(newArr);

// arr.map((item, index, array))=>{
//     console.log(item*2);
//     console.log(index);
//     console.log(array);
// }


// var myarr =  arr.map(function(a, b){
//     console.log('hello world', a * 2, b);
//     return a * 2;
// });
// console.log(myarr);

// var myarr =  arr.map((item)=>item *2)
// console.log(myarr)

//filter
var arr2 = [1,22,34,43,57,6,8,9
]
// var arr3 = []
// for (var i=0; i<arr2.length;i++){
//     if(arr2[i]%2==0){
//         arr3.push(arr2[i])
//     }else {

//     }
// }

// console.log(arr3)

// var arr4 = arr2.filter((item)=> item%2==0)
// console.log(arr4)

// var arr5 = [
//     {
//         fname: 'minhaj',
//         isActive: true
//     },
//      {
//         fname: 'ali',
//         isActive: true
//     },
//      {
//         fname: 'rehman',
//         isActive: false
//     },
//      {
//         fname: 'usman',
//         isActive: false
//     },
// ]

// var arr6 = arr5.filter((item)=>item.isActive == true)
// console.log(arr6)

// exponent operator
// console.log(2**4)

a = 5 
b = 8 

// a = a + b
// b = a- b
// a = a- b
// console.log(a,b)

var [a,b] = [b,a]
console.log(a,b)