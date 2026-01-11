

// for (start  , end, increment) {
//     execution block
// }

// for (var i = 0; i <= 99; i++){
//     console.log('hello', i   )
// }

// var userInput = Number(prompt('Enter number'))
// var userInput = prompt('Enter number')
// var num2 = +prompt('enter ')
// for (var i = 1; i <= num2; i++){
//     console.log(userInput,' X ', i, " = ", userInput * i)
// }


var cities = ['karachi', 'lahore', 'pindi', "multan", 'hyderabad']
// console.log(cities[0])
// console.log(cities[1])
// console.log(cities[2])
// console.log(cities[3])

// for (var i = 0 ; i <= cities.length - 1; ++i) {
//     console.log(cities[i])
// }

// console.log(cities.length)

// for (var i = cities.length - 1 ; i >= 0; i--) {
//     console.log(cities[i])
// }

var dish = prompt('Enter dish')
var items = ['biryani', "fish", 'handi', "karahi", "nihari", "nan", 'paya']
var flag = false
var find ;
for (var i = 0; i <= items.length - 1; i++) {
    console.log(items[i])
    if (dish == items[i]) {
       flag = true
       find = items[i]
        break
    } else {
        flag = false
    }
}

if (flag){
 alert('find ' + dish)
}else {
     alert('not find')
}
