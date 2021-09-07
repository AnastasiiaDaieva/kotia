import refs from './refs.js';

const { heroButton, navAccess } = refs;
// console.log(heroButton, navAccess);

function showList() {
  navAccess.classList.toggle('isActive');
}

function hideList() {
  navAccess.classList.remove('isActive');
}

function navDelay() {
  setTimeout(hideList, 100);
}

heroButton.addEventListener('click', showList);

heroButton.addEventListener('blur', navDelay);
