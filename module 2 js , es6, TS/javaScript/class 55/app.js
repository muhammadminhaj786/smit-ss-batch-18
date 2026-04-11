

// // var list = []
// // localStorage.setItem('list', JSON.stringify(list))

// var inp = document.getElementById('inp')
// var ulList = document.getElementById('list')

// function renderLsit(){ 
//     var todos = JSON.parse(localStorage.getItem('list')) || []
//      console.log(todos)
//     ulList.innerHTML = ""
//      for (var i =0; i< todos.length; i++){
//         console.log(todos[i])
//         var li = document.createElement('li')
//         li.innerText = todos[i]
//         ulList.appendChild(li)
//      }
// }

// function saveTodo(){
// // if(JSON.parse(localStorage.getItem('list')) ){
// //     var todos = JSON.parse(localStorage.getItem('list'))
// //     console.log('first time reder fasle')
// // }else{
// //     var todos = []
// // }
//     var todos = JSON.parse(localStorage.getItem('list')) || []
//     todos.push(inp.value)
//     localStorage.setItem('list', JSON.stringify(todos))
//     renderLsit()
// }

// renderLsit()

// Promise
// async
// ()=>{

// }

// setTimeout(function, 1000)
// setTimeout(function hello(){
// console.log(2)
// }, 0)
// console.log(1)

var para = document.getElementById('para')

var countdown = 10
var countdownFunction = setInterval(function foo() {
   countdown --
   console.log(countdown)
   para.innerHTML = countdown
   if(countdown <=1){
    clearInterval(countdownFunction)
   }
}, 1000);