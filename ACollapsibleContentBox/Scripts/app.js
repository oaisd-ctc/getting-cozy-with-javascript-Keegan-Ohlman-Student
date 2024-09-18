let button = document.getElementById('toggleButton');
let div = document.getElementsByClassName('visible') [0];

button.addEventListener('click', () => {
    div.classList.toggle('invisible');
})