var list = document.getElementById("list")

function addTodo(){
    // Add
    var todo_item = document.getElementById("todo-items")
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    list.appendChild(li)
    todo_item.value = ""
    
    // Edit
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.setAttribute("class","editBtn")
    li.setAttribute("class","li")
    
    // Delete
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    delBtn.setAttribute("class","btn1")
    delBtn.setAttribute("onclick","deleteItem(this)")


}


function deleteItem(e){
    e.parentNode.remove()
}

function deleteall(){
    list.innerHTML = ""
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", val)
    e.parentNode.firstChild.nodeValue = editValue
}