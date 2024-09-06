let hideButton = document.getElementById("btn-hide");
let showButton = document.getElementById("btn-show");
let paragraph2 = document.getElementById("p2");

hideButton.addEventListener('click', () => {
    paragraph2.style.display = 'none';
})

showButton.addEventListener('click', () => {
    paragraph2.style.display = 'block';
})