

// console.log(document)
// var para = document.getElementById("para")
// console.log(para)
// para.innerText = 'hello world'
// para.style.color = 'red'
// para.style.backgroundColor = '#AAFF00'
// para.style.height = '40px'

// // console.log(document.childNodes[1].childNodes[2].childNodes)

// // var document = {
// //     elemet: '<para id = "para"> </p>'
// // }


// var btn = document.getElementById('counter-btn')
// btn.classList.add('btn')

// var i = 0
// function foo(){
//     i++
//     // console.log(i)
    

//     var countPara = document.getElementById('count')
//     console.log(countPara)
//     countPara.innerText = i
    
// }

// var para2 = document.getElementById('para2')


// function expand(){
// para2.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis beatae architecto molestias eaque ad, voluptas blanditiis adipisci delectus natus ea. Voluptas necessitatibus dolorum eum. Illo optio saepe dolores vitae.'
// }

var box = document.createElement('div')
console.log(box)
box.classList.add('box')
var para3 = document.createElement('p')
para3.innerText = 'pakistan'
box.appendChild(para3)
document.body.appendChild(para3)