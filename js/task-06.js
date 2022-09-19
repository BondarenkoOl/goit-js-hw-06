const inputSymbol = document.querySelector('#validation-input');

inputSymbol.addEventListener('blur', (event) => {
	const trimmedText = event.target.value.trim();
	if (trimmedText.length == inputSymbol.getAttribute('data-length')) {
		inputSymbol.classList.remove('invalid');
		inputSymbol.classList.add('valid');
	} else {
		inputSymbol.classList.remove('valid');
		inputSymbol.classList.add('invalid');
	}
});
