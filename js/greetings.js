const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);

  // 시간이 오전(6시 ~ 12시)이면 -> `Good morning jiho`
  // 시간이 점심이면(12시 ~ 2시) -> `Did you eat lunch, jiho?`
  // 시간이 오후이면(2시 ~ 6시) -> `Good afternoon jiho`
  // 시간이 저녁이면(6시 ~ 10시) -> `Have you eaten dinner, jiho?`
  // 시간이 밤이면(10시 ~ 2시) -> `Good night jiho`
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
  paintGreetings();
}
