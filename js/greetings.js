
const loginInput =document.querySelector("#login-form input");
const loginForm =document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

function onSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings();
}
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
greeting.innerText = `Good morning, ${username}`;
greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername===null){
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit",onSubmit);
}
else{
    paintGreetings();
}