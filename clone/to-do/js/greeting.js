//이름 버튼 누르고 바꾸기
const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("#name-form input");

const nameSubmit = (event) => {
    event.preventDefault();
    const name = nameInput.value;
    nameForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    changeGreeting(name);
}
nameForm.addEventListener("submit" , nameSubmit);

//인사말 바꾸기
const greeting = document.getElementById("greeting");
const changeGreeting = (name) => {
    if (hours < 12){
        greetin.innerHTML = `Good Morning, ${name}`
    } else if (12 < hours < 18) {
        greeting.innerHTML = `Good Afternoon, ${name}`
    } else {
        greeting.innerHTML = `Good Evening, ${name}`
    }

    todoInput.placeholder = `${name}의 오늘 할 일은?`
}