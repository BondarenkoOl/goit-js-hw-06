const listLength = document.querySelectorAll('.item');
console.log(`Number of categories: ${listLength.length}`);

const itemCategory = listLength.forEach((category) => {
	console.log(`Category: ${category.firstElementChild.textContent}`);
	console.log(`Elements: ${category.querySelectorAll('li').length}`);
});
