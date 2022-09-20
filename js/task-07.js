const sizeControler = document.querySelector('#font-size-control');
const variableText = document.querySelector('#text');

const sizeText = (event) => {
	variableText.style.fontSize = `${event.target.value}px`;
};
sizeControler.addEventListener('input', sizeText);
