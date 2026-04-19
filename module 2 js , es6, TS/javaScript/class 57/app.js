// var arr1 = [1,2,3]    //0001
// var arr2 = arr1       //0001
// // console.log(arr2)
// // arr1.pop()
// arr2.pop()
// // arr1 = [4,5,6]    //0002
// console.log(arr1)
// console.log(arr2)

// var num1 = 123
// var num2 = num1
// num1 = 456
// console.log(num1)
// console.log(num2)

// spread operator ...
var arr1 = [1, 2, 3];
var arr2 = [...arr1];
// arr1.pop()
arr2.pop();
// arr1 = [4,5,6]
console.log(arr1);
console.log(arr2);

// destructure
var arr3 = [1, 2, 3, 4];
console.log(arr3[2]);
// var num4 = arr3[2]
// console.log(num4)
var [, num4, , a] = arr3;
console.log(a, num4);

var stdObj = {
  name: "ali",
  rollNo: 123,
  class: 6,
};

console.log(stdObj.name);
console.log(stdObj["name"]);
var { name: stdName } = stdObj;
console.log(stdName);
var { class: stdClass } = stdObj;

// ternary operator ? :
var age = 19;
// if(age > 18){
//     console.log('allowed')
// }else {
//     console.log('not allowed')
// }
value = 0;

// age > 18 ? console.log('allowed'): console.log('not allowed')
// value ? console.log('value positive') : console.log('nhi arhi')
value && console.log("arahi he");

{
  /* <div class="card">
        <div class="imgDiv">
            <img src="./images/prod.png" alt="">
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officiis vel, eaque itaque consequuntur numquam deleniti dolor, mollitia qui omnis impedit quaerat porro rem. Nesciunt voluptate fugit nam dolores aperiam.
            </p>
            <p>Rs 200</p>
        </div>
    </div> */
}

// var proObj = [
//   {
//     src: "./images/prod.png",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officiis vel, eaque itaque consequuntur numquam deleniti dolor, mollitia qui omnis impedit quaerat porro rem. Nesciunt voluptate fugit nam dolores aperiam.",
//     price: "Rs 350",
//   },
//   {
//     src: "./images/prod.png",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officiis vel, eaque itaque consequuntur numquam deleniti dolor, mollitia qui omnis impedit quaerat porro rem. Nesciunt voluptate fugit nam dolores aperiam.",
//     price: "Rs 450",
//   },
// ];

// localStorage.setItem('proObj', JSON.stringify(proObj) )

var proObj = JSON.parse(localStorage.getItem('proObj'))

for (var i = 0; i < proObj.length; i++) {
  console.log(proObj[i]);
  var card = document.createElement("div");
  card.classList.add("card");
  document.body.appendChild(card);
  var imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");
  card.appendChild(imgDiv);
  var img = document.createElement("img");
  img.setAttribute("src", proObj[i].src);
  imgDiv.appendChild(img);
  var bottomDiv = document.createElement("div");
  var para1 = document.createElement("p");
  para1.innerText = proObj[i].description; 
  var para2 = document.createElement("p");
  para2.innerText = proObj[i].price;
  bottomDiv.appendChild(para1);
  bottomDiv.appendChild(para2);
  card.appendChild(bottomDiv);
}

// var {src,description, price} = proObj

// var stdObj = {
//     fName: 'minhaj'
// }
// var fName =stdObj.fName
// var {fName} = stdObj
