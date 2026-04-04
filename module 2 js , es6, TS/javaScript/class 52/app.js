
// var std1 = {
//     firstName: 'ali',
//     lastName: 'raza'
// }

// var std2 =  {
//     firstName: 'ahmed',
//     lastName: 'raza'
// }

// console.log(std2)

// function Student(a, b, c=8){
//     this.firstName = a
//     this.lastName = b
//     this.classGrade = c
    // this.greet = function(){
    //     console.log('hello', this.firstName)
    // }
// }

// Student.prototype.greet = function(){
//     console.log('hello', this.firstName)
// }


// var std1 = new Student('ali', "raza", 9)
// var std3 = new Student('minhaj', 'wahid')
// console.log(std1, std3)
// std3.greet()
// console.log(std1.hasOwnProperty("greet"))

// plans = basic {
//     price: 10
// }, pro {
//     20
// }, pro+ {
//     30
//     ]
// }
// name, amount, active


function Users(a,b,c){
    this.fname = a
    this.amount = b
    this.active = c
    this.greet = function(){
        console.log('hi')
    }

}

Users.prototype.plan = function(){
    if(this.active == true){
        console.log('your membership is already active')
    }else if (this.amount < 10){
        console.log('insufucient amout , minimum merbership is start from to 10 dollars')
    }else if(this.amount > 10 && this.amount < 20){
        console.log('Basic plan successfully acive to your account, now your curent balance is ' ,this.amount - 10)
    }else if(this.amount > 20 && this.amount < 30){
         console.log('pro plan successfully acive to your account, now your curent balance is ' ,this.amount - 20)
    }
    else if(this.amount > 30){
         console.log('pro+ plan successfully acive to your account, now your curent balance is ' ,this.amount - 30)
    }
}

var user1 = new Users('ali', 12, true)
var user2 = new Users('ahmed', 8, false)
var user3 = new Users('irfan', 19, false)
var user4 = new Users('imran', 28, false)
var user5 = new Users('nazir', 88, false)
var user6 = new Users('nazir', 0, false)
user1.greet()


user1.plan()
user2.plan()
user3.plan()
user4.plan()
user5.plan()
user6.plan()
console.log(user1)