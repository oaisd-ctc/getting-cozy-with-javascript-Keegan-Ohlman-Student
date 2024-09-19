let button = document.getElementById('submitButton');

button.addEventListener('click', (e) => {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;

    if(username.length < 3)
    {
        e.preventDefault();
        document.getElementById('usernameError').innerHTML = "Your username must be at least 3 characters long.";
    }

    if(!email.includes(".") || !email.includes("@"))
    {
        e.preventDefault();
        document.getElementById('emailError').innerHTML = "Your email must include a '@' and a '.' symbol.";
    }

    if(age <= 10 || age >= 100)
    {
        e.preventDefault();
        document.getElementById('ageError').innerHTML = "Your age must be between 10 and 100.";
    }
})