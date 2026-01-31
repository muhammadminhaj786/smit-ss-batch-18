

var arr = [1,2,4,5,6]
// [6,5,4,2,1]
// var sum = 0
// for (var i = 0; i<arr.length;i++){
//     console.log(arr[i])
//     sum = sum + arr[i]
// }
// console.log(sum)
var newArr = []
// for (var i = arr.length-1; i >=0; i-- ){
//     console.log(arr[i])
//     newArr.push(arr[i])
// }

for (var i =0 ; i< arr.length; i++){

    newArr.unshift(arr[i])
}

// [6,5,4,2,1]

console.log(newArr)

var thing = "mama"
var newThing = ''
for (var i = thing.length-2; i>=0; i--){
    console.log(thing[i])
    // newThing = newThing + thing[i]
    newThing += thing[i]

}
console.log(newThing)

for (var i = 1; i<=5; i++ ){
    
    if (i == 2){
        continue
        
    }
    console.log(i)
    
}

var now =  Date()
console.log(now)