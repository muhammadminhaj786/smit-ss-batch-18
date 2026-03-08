
let turn = true;
function play(ele) {
// //   console.log("box" + turn);
//   let id = "box" + turn;
//   var box = document.getElementById(id);

//   console.log(box);
  console.log(ele);

  if (turn) {
    ele.textContent = "x";
    turn = false;
  } else {
    ele.textContent = "o";
    turn = true;
  }
}
