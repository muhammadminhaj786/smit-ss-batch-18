// arr= [2,4,8,10]

// // start
// arr.reduce((acc , curr)=>{
//     console.log(acc)
//     return acc
// })

// promises
// pending
// fullfilled
// reject
var cards = document.getElementById("cards");

var dummy = new Promise((pen, ful, rej) => {
  fetch("https://gzero-back.vercel.app/api/sites/public")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      var result = data.data;
      // for (var i=0; i<data.length;i++){
      //     var card = document.createElement('div')
      //     card.setAttribute('class', 'card')
      //     var h1 = document.createElement('h1')
      //     h1.innerHTML = data[i].title
      //     var para = document.createElement('p')
      //     para.innerText = data[i].body
      //     card.appendChild(h1)
      //     card.appendChild(para)
      //     cards.appendChild(card)
      // }
      for (var i = 0; i < result.length; i++) {
        console.log(result[0]);
        var card = document.createElement("div");
        card.setAttribute("class", "card");
        var img = document.createElement("img");
        img.setAttribute("src", result[0].thumnails[0]);
        card.appendChild(img);
        var div2 = document.createElement("div");
        var para1 = document.createElement("p");
        para1.innerHTML = result[0].facilities[0].name
        div2.appendChild(para1)
        card.appendChild(div2)
        for(var j=0; j<result[0].thumnails.length;j++){
          console.log(result[0].thumnails[j])
          var div3 = document.createElement('div')
          var img2 = document.createElement('img')
          img2.setAttribute('src', result[0].thumnails[j])
          div3.appendChild(img2)
          card.appendChild(div3)
        }
        cards.appendChild(card);
      }
    })

    .catch((err) => console.log(err));
});

console.log(dummy);
console.log("run");
// console.log(fetch('https://jsonplaceholder.typicode.com/posts'))

// const getTodos = async () => {
//   try {
//     let data = await fetch("https://jsonplaceholder.typicode.com/todos");
//     console.log(data.json());
//   } catch (error) {
//     console.log(error);
//   }
// };

// getTodos();

// https://gzero-back.vercel.app/api/sites/public
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'dhaka'}&appid=${''}`)
.then(res => res.json())
.then(data => console.log(data))