const login = document.querySelector('.login-form');

login.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const {
		elements: { email, password }
	} = event.currentTarget;

	if (email.value === '' || password.value === '') {
		return alert('Please fill in all the fields!');
	}
	const inputData = { email: email.value, Password: password.value };

	console.log(inputData);
	event.currentTarget.reset();
}
