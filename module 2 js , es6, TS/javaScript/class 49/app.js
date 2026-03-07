// hasAttribute => return boolean 
// classList.add => add class

let inp = document.getElementById('inp')
let sp = document.getElementById('sp')
console.log(sp.hasAttribute('src'))

function addTodo(){
    console.log(inp.value)
    inp.value = ""
    inp.classList.remove('bgblue')
    inp.classList.add('bgred')
    // inp.classList.replace()
}