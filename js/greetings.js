const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const todoList = document.querySelector('#todo-list');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
  todoList.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);

  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) {
    greeting.innerText = `Good morning, ${username}`;
  } else if (hours >= 12 && hours < 14) {
    greeting.innerText = `Did you eat lunch, ${username}?`;
  } else if (hours >= 14 && hours < 18) {
    greeting.innerText = `Good afternoon, ${username}`;
  } else if (hours >= 18 && hours < 22) {
    greeting.innerText = `Have you eaten dinner, ${username}?`;
  } else {
    greeting.innerText = `Good night, ${username}`;
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings();
}
