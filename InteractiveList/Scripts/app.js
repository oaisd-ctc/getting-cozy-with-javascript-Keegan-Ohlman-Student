let button = document.getElementById('btn-add');
let list = document.getElementById('list');

button.addEventListener('click', () => {
    let itemToAdd = document.getElementById('itemToAdd').value;
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(itemToAdd));
    list.appendChild(item);
})