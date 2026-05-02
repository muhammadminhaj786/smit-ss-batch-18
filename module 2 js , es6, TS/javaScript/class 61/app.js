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
var cards = document.getElementById('cards')

var dummy = new Promise((pen, ful, rej) => {
  fetch("https://gzero-back.vercel.app/api/sites/public")
    .then( response => response.json()
    )
    .then((data) => {
        console.log(data)
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