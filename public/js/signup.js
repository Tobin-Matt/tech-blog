// Function to handle signing up a new user
const signupHandler = async (event) => {
    event.preventDefault();

    const newUsername = document.querySelector('#username-signup').value.trim();
    const newPassword = document.querySelector('#password-signup').value.trim();

    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ 
            username: newUsername, 
            password: newPassword 
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        //Need to make sure the api route to sign up has "loggedIn" set to true
        document.location.replace('/');
    } else {
        alert('Username or Password does not meet criteria');
    }

    // if(newUsername && newPassword) {
        
    // }
};

document
    .querySelector('.sign-form')
    .addEventListener('submit', signupHandler);