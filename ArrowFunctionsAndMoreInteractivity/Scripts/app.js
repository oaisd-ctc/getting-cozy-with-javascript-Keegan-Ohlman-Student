let shape = document.getElementById("shapeSelector");


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