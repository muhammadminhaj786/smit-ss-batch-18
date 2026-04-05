// const user = {
//   false: 0,
//   // addrees: {
//   //     street: 'no2'
//   // }
// };
// console.log("hello");

try {
  console.log(user.addrees.street);
} catch (error) {
  console.log(error);
}

// ;:''
console.log("hello");
console.log("hello");

var inp = document.getElementById("inp");
console.log(inp);
var para = document.getElementById("name");
var emailInp = document.getElementById('email-inp')

function getVal() {
  var getName = localStorage.getItem("name");
  para.innerText = getName;
  console.log('run')
}
getVal()
var getName = localStorage.getItem("name");
  para.innerText = getName;
function saveName() {
  var inputValue = inp.value;
  localStorage.setItem("name", inputValue);
  var inputEmail = emailInp.value
  localStorage.setItem('email', inputEmail)
//   var getName = localStorage.getItem("name");
//   para.innerText = getName;
  //   window.location.reload()
    getVal()
}

function removeVal (){

    localStorage.removeItem('name')
    getVal()
}

function clearAll(){
    localStorage.clear()
}

// localStorage.setItem('name', 'minhaj')
// console.log(localStorage.getItem('name'))

const user1 ={
    firstName: 'minhaj',
    lastName: 'wahid',
    age: 24,
    phoneNo: '123',
    email: 'minhaj@gmail.com'
}
console.log(user1)

localStorage.setItem('user', JSON.stringify(user1))
var reverseString = JSON.parse(localStorage.getItem('user'))
console.log(reverseString)