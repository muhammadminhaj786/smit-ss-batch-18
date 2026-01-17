

// console.log(document.getElementById('txt'))

var hello = 'hello'.toLocaleUpperCase()
console.log(hello)

// var text = 'hello world'
// var text = prompt('Enter world')
// console.log(text.length)
// var cap = text[0].toUpperCase() + text.slice(1)
// console.log(cap)
// var copy = text.slice(1,text.length)
// console.log(copy)
// var result = cap + copy
// console.log(result)


// var cap = ""
// var copy = ''
// for (var i =0 ; i< text.length; i++){

//     console.log(text[i])
//     if (i == 0){
//         cap = text[0].toUpperCase()
//     }else{
//         copy += text[i]
//     }

// }
// console.log(cap)
// console.log(copy)
// var result = cap + copy
// console.log(result)

// var arr = ['hello', 'world']
// arr[0]

// var cityToCheck = 'karachi'
// console.log(cityToCheck[0])
// console.log(cityToCheck.slice(1))

// var month = 'febuary'
// console.log(month.slice(0,3))

// var sen = 'this is a a pakistan '.split(" ")
// console.log(sen)
// var flag = false
// for (var i = 0; i < sen.length; i++) {
//     console.log(sen[i])
//     if (sen[i] == 'pakisan') {
//         // alert("found")
//         flag = true
//         break
//     } else {
//         // alert("not found")
//         flag = false
//     }
// }

var flag = false
var sen = 'this is a a pakistan'
if (sen.slice(12) == 'pakistan'){
    flag = true
}
// for (var i =0; i<sen.length; i++){
//     if (sen.slice(12) == 'pakistan'){
//         flag = true
//     }
// }
if (flag){
    alert("found")
}else {
    alert("not found")
}