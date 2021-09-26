import refs from './refs.js';
const { buttonScream, imgScream } = refs;
console.log(buttonScream);

buttonScream.addEventListener('click', e => {
  imgScream.classList.toggle('visually-hidden');
});
