function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValueOutput = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

function changeBodyColor() {
	const bgColor = getRandomHexColor();
	colorValueOutput.textContent = bgColor;
	body.style.backgroundColor = bgColor;
}
changeColorBtn.addEventListener('click', changeBodyColor);
