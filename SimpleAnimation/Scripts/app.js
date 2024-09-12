let leftButton = document.getElementById("btn-move-left");
let rightButton = document.getElementById("btn-move-right");

let box = document.getElementById("move-box");

rightButton.addEventListener('click', ()  => {
    box.style.transform = "translateX(50px)";
})

leftButton.addEventListener('click', () => {
    box.style.transform = "translateX(-50px)";
})