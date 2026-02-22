// var data = [
//  {
//         src: 'https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg',
//         description: 'this is a car',
//         price: '123',

//     },

//        {
//         src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8bfIZjN4d6cynEqrh5N0oWbYhmZgtMC7uMA&s',
//         description: 'this is a bike',
//         price: '456',

//     },

// ]

// var card = document.getElementById('container')

// var half = 0

// for(var i =0 ; i<data.length/half; i++){
//     // console.log('hello')
//     console.log(data[i])
// var newDiv = document.createElement('div')
// var img = document.createElement('img')
// img.src = data[i].src
// var para1 = document.createElement('p')
// para1.innerText= data[i].description
// var para2 = document.createElement('p')
// para2.innerText = data[i].price
// var btn = document.createElement('button')
// btn.innerText = 'Add to cart'

// newDiv.appendChild(img)
// newDiv.appendChild(para1)
// newDiv.appendChild(para2)
// newDiv.appendChild(btn)
// card.appendChild(newDiv)
// }

// var para = document.getElementById("para");
// var btn = document.getElementById('btn')

// var flag = false
// function expand() {
//       if(!flag){
// para.innerText =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae est ratione dolor praesentium earum numquam veniam explicabo minima eos reprehenderit at, nobis eligendi rem architecto voluptate ipsum? Molestias, nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae est ratione dolor praesentium earum numquam veniam explicabo minima eos reprehenderit at, nobis eligendi rem architecto voluptate ipsum? Molestias, nobis.";
//     btn.innerText = 'see less'
//     flag = true
//       }else{
//         para.innerText =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
//     btn.innerText = 'see more   '
//     flag = false
//       }
// }

// childNodes => return html + junkaltifcate
// console.log(document.childNodes[1].childNodes[2].childNodes[1].style.color = 'pink')

// childern => return html
// console.log(document.children[0].children[1].children[0])

// var parent = document.getElementById('parent')
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)
// var fChild = parent.firstElementChild
// console.log(fChild.nextElementSibling)
// var lChild = parent.lastElementChild
// var fourChild = lChild.previousElementSibling
// console.log(fourChild.previousElementSibling.style.color = 'pink' )

// // fchild=> return first child

// var paras = document.getElementsByTagName('p')
// console.log(paras)
// for(var i = 0;i<paras.length; i++){
//     console.log(paras[i])
//     if(i==4){
//         paras[i].style.color = "green"
//     }
// }

var para5 = document.createElement('p')
para5.innerText = ' para5'
document.body.appendChild(para5)
para5.style.color = "pink"