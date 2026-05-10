
// let price: number = 100
// let tax: number =  0.15
// let finalResult = price + tax

// console.log('hello')
// console.log('123')
// console.log('aaa')   

// type annotation
// explicitly define

// keyword variableName:number  = value
var num1: number = 123
var numbers: number[] = [1,23,4,42]
var mixarray : (number | string | boolean)[] = [34,23434,34,'asd', true, num1]
var person: {fName: string, phoneNumber: number, isActive: boolean} = {
    fName: 'minhaj',
    phoneNumber: 123,
    isActive: true
}

let userBlock = true
if(userBlock == true){
    console.log('not allowed')
}else {
    console.log('allowed')
}

//inference
// var num2 = 45
// var num3: number = "234"
// let num4: number = num2 + num3
// console.log(num4)
let active = true

let inp: number = Number(prompt('enter price'))
let cal = inp + 100
console.log(cal)


let num5: number = 89

let phoneNumber: string | number | boolean = 234

