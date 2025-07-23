const btn = document.getElementById('manu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    btn.classList.toggle('flex')
    btn.classList.toggle('hidden')
})
// Initialization for ES Users
import {
  Carousel,
  initTWE,
} from "tw-elements";

initTWE({ Carousel });