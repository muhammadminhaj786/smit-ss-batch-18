

console.log('connected')

let input = document.getElementById('inp')

function setNumber(val){
    console.log(input.value)
    input.value += val
    console.log(val)
}

function cal(){
    console.log('calculation', input.value)
    var output = eval(input.value)
    input.value = output
}

function allClear(){
    input.value = ""
}

function clearOne(){
    // input.value 
    input.value = (input.value.slice(0,-1))
    // console.log('run')
}