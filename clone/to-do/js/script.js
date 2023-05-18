const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoListHtml = document.getElementById("todo-list");

function submitTodo (event) {
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    viewTodo(todo);
}

function viewTodo(todo) {
    const divTodo = document.createElement("div");
    const inputTodo = document.createElement("input");
    const pTodo = document.createElement("p");
    const buttonTodo = document.createElement("button");
    divTodo.id = "todo-lists";
    inputTodo.type = "checkbox";
    pTodo.innerHTML = todo;
    buttonTodo.id = "delBtn";
    buttonTodo.innerHTML = "x";

    divTodo.appendChild(inputTodo);
    divTodo.appendChild(pTodo);
    divTodo.appendChild(buttonTodo);
    todoListHtml.appendChild(divTodo);

    buttonTodo.addEventListener("click", delTodo);
    inputTodo.addEventListener("change",function(event) {
        if(event.target.checked) {
            pTodo.classList.add("checked");
        } else {
            pTodo.classList.remove("checked");
        }
    });
}

function delTodo(event) {
    const delTodoList = event.target.parentElement;
    delTodoList.remove();
}

todoForm.addEventListener("submit",submitTodo);