// function awake(){
//     console.log('awake')
// }

// function pizza(callback){
//     console.log('pizza arrive')
//     callback()
// }

// pizza(awake)

// var newFunc = (a)=> a
// console.log(newFunc(54))
//map => array ko transform karne ke liye
var arr1 = [1, 2, 3, 4, 5];

// var newArr = arr1.map((item, index)=> item * 2 )
// console.log(newArr)

//filter kisi bhi specific elements ko find karne ke liye
var arr2 = arr1.filter((a, i) => a > 2);
console.log(arr2);

const users = [
  {
    fName: "ali",
    isActive: true,
  },
  {
    fName: "sami",
    isActive: false,
  },
  {
    fName: "noman",
    isActive: true,
  },
  {
    fName: "usman",
    isActive: false,
  },
];
// var arr3 =users.filter((user)=> !user.isActive )
// console.log(arr3)

var arr5 = [1, 257, 56, 7, 8, 34];
// find
var findUser = users.find((user, i) => !user.isActive);
console.log(findUser);
console.log(arr5.find((i) => i == 256));

//reverse
var arr6 = [10, 9, 8, 7, 6, 5, 4, 3, 2,1, 1];
arr6.reverse();
console.log(arr6);
// var arr7 = []
// // for(var i=0;i<arr6.length;i++){
// //     arr7.unshift(arr6[i])
// // }
// // for(var i=arr6.length-1;i>=0;i--){
// //     arr7.push(arr6[i])
// // }
// console.log(arr7)

// var smallColor = ['green', 'red', 'blue']
// var bigColor = ['black', 'white', 'yellow']
// var colors = smallColor.concat(...bigColor)
// console.log(colors)

// reduce

// var total = 0;
// for (var i = 0; i < arr6.length; i++) {
//   total += arr6[i];
// }

// console.log(total);

var arr8 = arr6.reduce((prev, curr)=> console.log(prev,curr))
// console.log(arr8)


var arr9 = [1,2,2,4,6,6,9,7,8,7]
var arr10 = [38,78,65,34,3,8,53]
// question  remove duplicate
// find duplicate items
// find smallest number
// find larges number
// second largest number