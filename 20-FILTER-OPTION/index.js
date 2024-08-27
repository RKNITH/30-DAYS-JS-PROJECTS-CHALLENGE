const fruits = ['apple', 'banana', 'guava', 'orange'];
const animals = ['dog', 'cow', 'goat', 'fox', 'bear'];
const flowers = ['rose', 'lily', 'sunflower'];

const allThings = [...fruits, ...animals, ...flowers];

const fruit = document.getElementById('fruit');
const animal = document.getElementById('animal');
const flower = document.getElementById('flower');
const result = document.getElementById('result');
const display = document.getElementById('display');

// Display all items initially
displayItems(allThings);

function displayItems(items) {
    display.innerHTML = items.map(item => `<span>${item}</span>`).join('');
}

function filterItems() {
    let filteredItems = [];

    if (fruit.checked) filteredItems = [...filteredItems, ...fruits];
    if (animal.checked) filteredItems = [...filteredItems, ...animals];
    if (flower.checked) filteredItems = [...filteredItems, ...flowers];

    result.innerHTML = filteredItems.length > 0 ? filteredItems.map(item => `<span>${item}</span>`).join('') : 'No items selected';
}

// Attach event listeners to checkboxes
fruit.addEventListener('change', filterItems);
animal.addEventListener('change', filterItems);
flower.addEventListener('change', filterItems);
