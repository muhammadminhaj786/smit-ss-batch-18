
//previousSibling => get previous element sibling
// parentNode => get parent of element
//text content => change content of text node

console.log('hello')
// var pass = document.getElementById('pass')


// function login(){
// console.log(pass.value.length);
// if(pass.value.length > 8){

// }else {
//     alert('password atleast 8 characters long')
// }
// }


var taskInp = document.getElementById('taskInp')
var list = document.getElementById('list')
// var li;

function addTodo(){
    console.log(taskInp.value)

    //create li element
    var li = document.createElement('li')
    // li.innerText = taskInp.value
    var liTxt = document.createTextNode(taskInp.value)
    li.setAttribute('class', 'd-flex w-100  justify-content-between p-4 align-items-center list-group-item mt-4')
    li.setAttribute('id', 'item')

    // create div for buttons
    var btnDiv = document.createElement('div')
    btnDiv.setAttribute('class', 'd-flex gap-2')

    //create buttons
    var editBtn = document.createElement('button')
    editBtn.innerText = "Edit Item"
    editBtn.setAttribute('class', 'btn btn-info')
    editBtn.setAttribute('onClick', "editTodo(this)")

    

    var delBtn = document.createElement('button')
    delBtn.innerText = "Delete Item"
    delBtn.setAttribute('class', 'btn btn-danger')
    //SET onclick attribut
    //this => curernt execution ya reference element
    delBtn.setAttribute('onClick', "deleteTodo(this)")

    //append child li to ul
    li.appendChild(liTxt)
    list.appendChild(li)
   btnDiv.appendChild(editBtn)
   btnDiv.appendChild(delBtn)
   li.appendChild(btnDiv)

}

function deleteTodo(ele){

    console.log('chala', ele.parentNode.parentNode)
    var li = ele.parentNode.parentNode
    li.remove()
}


function editTodo(e){
    console.log('edit',e.parentNode.previousSibling)
    
    var userpro = prompt('Enter item to update')
    console.log(userpro)
    e.parentNode.previousSibling.textContent = userpro

}

// console.log(this)