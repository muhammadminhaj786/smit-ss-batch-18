

console.log(window.location.href)
console.log('hello')
console.log('hello')
console.log('hello')



function about(){
    // window.location.href = 'about.html'
    // window.location.replace('https://www.facebook.com/')
    window.location.assign('https://www.facebook.com/')
}
var prod = {
    productName: 'pent',
    color: 'red',
    price: 123
}
// prod.price = '789'
console.log(prod.price)

// VAR num = '123'
try {
    console.log(prod?.price?.A)
} catch (error) {
    console.log(error)
}

console.log('work')
console.log('work')
console.log('work')


function section9(){
    window.location.href = '#section9'
}

function pageReload(){
    window.location.reload()
}

function oneStepback(){
    history.back()
}

// document.write('<html>')

// window.open('https://www.facebook.com/reg/?entry_point=login&next=')
function foo(){
    try {
        
    } catch (error) {
        
    }
}