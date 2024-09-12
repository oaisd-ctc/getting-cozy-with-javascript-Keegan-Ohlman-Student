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
    let shapeToChange = document.getElementById("shape");

    if(shape.value === "Square")
    {
        shapeToChange.style.width = "100px";
        shapeToChange.style.height = "100px";
        shapeToChange.style.borderRadius = "0px";
        shapeToChange.style.borderLeft = "solid black";
        shapeToChange.style.borderRight = "solid black";
        shapeToChange.style.borderTop = "solid black";
        shapeToChange.style.borderBottom = "solid black";
        
    }

    if(shape.value === "Circle")
    {
        shapeToChange.style.width = "100px";
        shapeToChange.style.height = "100px";
        shapeToChange.style.borderRadius = "100px";
        shapeToChange.style.borderLeft = "solid black";
        shapeToChange.style.borderRight = "solid black";
        shapeToChange.style.borderTop = "solid black";
        shapeToChange.style.borderBottom = "solid black";
    }

    if(shape.value === "Triangle")
    {
        shapeToChange.style.width =  0;
        shapeToChange.style.height = 0;
        shapeToChange.style.borderLeft = "75px solid transparent";
        shapeToChange.style.borderRight = "75px solid transparent";
        shapeToChange.style.borderBottom = "100px solid black";
        shapeToChange.style.borderTop = "solid transparent";
        shapeToChange.style.borderRadius = "0px";
    }
})