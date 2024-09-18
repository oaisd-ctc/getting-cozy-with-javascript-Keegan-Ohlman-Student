let button = document.getElementById('submitButton');

button.addEventListener('click', (e) => {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;

    let regex = /@./i;

    if (username.length < 3)
    {
        e.preventDefault();
        document.getElementById('usernameError').innerHTML = "Your username must be at least 3 characters long.";
    }

    if(!email.match(regex))
    {
        e.preventDefault();
        document.getElementById('emailError').innerHTML = "Your email must include a '@' and a '.' symbol";
    }
})