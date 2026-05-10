

 function dummy(){
    console.log('run')
}

 function foo(){
    console.log('run2')
}

function add(a,b){
    return a+ b
}

function sub(a,b){
    return a- b
}

export {
   dummy,
   foo,
   add,
   sub 
}

var std = {
    addres: 'a'
}

export function Student(a,b){
    this.addres = a
    this.adddress2 = b
}

std.adddress2 = 'b'

var std1 = new Student('house 1', 'house2')