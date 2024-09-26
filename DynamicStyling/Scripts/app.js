let div = document.getElementsByClassName('text') [0];
let color = document.getElementById('colorSelector');

color.addEventListener('change', () => {
    if(color.value === "blue")
    {
        div.classList.remove("red", "green");
        div.classList.add("blue");
    }

     else if(color.value === "red")
    {
        div.classList.remove("blue", "green");
        div.classList.add("red");
    }

    else if(color.value === "green")
    {
        div.classList.remove("red", "blue");
        div.classList.add("green");
    }
})