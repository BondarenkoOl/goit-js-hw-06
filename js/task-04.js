const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const clickCounter = document.querySelector('#value');

let counterValue = 0;

decBtn.addEventListener('click', () => {
	counterValue -= 1;
	clickCounter.textContent = counterValue;
});

incBtn.addEventListener('click', () => {
	counterValue += 1;
	clickCounter.textContent = counterValue;
});
