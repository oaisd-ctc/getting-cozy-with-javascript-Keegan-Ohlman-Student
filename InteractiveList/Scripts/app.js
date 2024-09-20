let button = document.getElementById('btn-add');
let list = document.getElementById('list');
let arr = [];

button.addEventListener('click', () => {
    let itemToAdd = document.getElementById('itemToAdd').value;
    let item = document.createElement("li");
    let deleteButton = document.createElement("button");

    item.appendChild(document.createTextNode(itemToAdd));
    list.appendChild(item);
    deleteButton.appendChild(document.createTextNode("Delete"));
    item.appendChild(deleteButton);

    arr.push(item);
})

list.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON')
    {
        //not working properly yet
        item.remove();
    }
})