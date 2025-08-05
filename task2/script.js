let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", (e) => {
    if(!input.value) {
        return;
    }

    let list = document.getElementById("todoList");
    let p = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let completionBtn = document.createElement("button");

    p.innerText = input.value;
    deleteBtn.id = "dltBtn";
    deleteBtn.innerText = "delete";
    completionBtn.id = "cmpBtn";
    completionBtn.innerText = "Completed";

    deleteBtn.addEventListener("click", deleteTodo);
    completionBtn.addEventListener("click", deleteTodo);

    
    let newTodo = document.createElement("li");
    newTodo.appendChild(p);
    newTodo.appendChild(completionBtn);
    newTodo.appendChild(deleteBtn);
    newTodo.className = "todo";
    list.appendChild(newTodo);
});

function deleteTodo(e) {
    let todo =  e.target.parentElement;
    todo.parentNode.removeChild(todo);
}; 