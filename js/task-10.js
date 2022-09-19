function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const destroyBtn = document.querySelector('[data-destroy]');
const createBtn = document.querySelector('[data-create]');
const inputQuantity = document.querySelector('#controls>input');
const boxMake = document.querySelector('#boxes');

const boxCreater = (amount) => {
	const quantityBox = [];
	for (let i = 0; i < amount; i += 1) {
		const divBoxCreate = document.createElement('div');
		divBoxCreate.style.height = `${30 + 10 * i}px`;
		divBoxCreate.style.width = `${30 + 10 * i}px`;
		divBoxCreate.style.background = getRandomHexColor();
		boxMake.style.display = 'flex';
		quantityBox.push(divBoxCreate);
	}
	return quantityBox;
};

createBtn.addEventListener('click', () => {
	boxMake.append(...boxCreater(inputQuantity.value));
});

destroyBtn.addEventListener('click', () => {
	boxMake.innerHTML = '';
});
