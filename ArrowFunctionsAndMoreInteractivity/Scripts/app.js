let hideButton = document.getElementById("btn-hide");
let showButton = document.getElementById("btn-show");
let colorButton = document.getElementById("btn-change-color");

let paragraph2 = document.getElementById("p2");
let paragraph3 = document.getElementById("p3");

let color = document.getElementById("txt-color");

let shape = document.getElementById("shapeSelector");

hideButton.addEventListener('click', () => {
    paragraph2.style.display = 'none';
})

showButton.addEventListener('click', () => {
    paragraph2.style.display = 'block';
})

colorButton.addEventListener('click', () => {
    let newColor = color.value;
    paragraph3.style.backgroundColor = newColor;
})

shape.addEventListener('change', () => {
    let shapeToChange = document.getElementByID("shape");

    if(shape.value === "Circle")
    {
        shapeToChange.style.borderRadius = "100px";
    }
})