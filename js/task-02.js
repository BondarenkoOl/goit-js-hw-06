const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments'
];
const list = document.querySelector('#ingredients');

// метод document.createElement()
const markup = ingredients.map((ingredient) => {
	const li = document.createElement('li');
	li.textContent = ingredient;
	li.classList.add('item');
	return li;
});
list.append(...markup);

// метод reduce

// const markup = ingredients.reduce(
// 	(acc, item) => acc + `<li class="item">${item}</li>`,
// 	''
// );
// list.innerHTML = markup;
