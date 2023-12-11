// Get elements
const inputItem = document.querySelector('#item');
const addItem = document.querySelector('#btn');
const itemList = document.querySelector('#items-list');

//Add items to the list
addItem.addEventListener('click', () => {
    if (inputItem.value !== "") {
        let itemName = inputItem.value;
        inputItem.value = '';
        const liElement = document.createElement('li');
        const liContent = document.createElement('span');
        liContent.textContent = itemName;
        liElement.append(liContent);
        const deleteItem = document.createElement('button');
        deleteItem.textContent = 'Remove Item';
        liElement.append(deleteItem);
        itemList.append(liElement);
        // Remove item from the list
        deleteItem.addEventListener('click', () => {
            itemList.removeChild(liElement, deleteItem);
        })
        document.querySelector('#item').focus();
    } else {
        alert('Please enter a new item');
    }
})

console.log(inputItem);
console.log(addItem);
console.log(itemList);