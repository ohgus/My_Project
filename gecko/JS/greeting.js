const LoginForm = document.querySelector("#logIn-Form");
const LoginInput = LoginForm.querySelector("#logIn-Form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event){
    event.preventDefault();
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    const username = LoginInput.value;
    console.log(username);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `안녕하세요 ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit",onSubmit);
} else {
    paintGreetings(savedUsername);
}