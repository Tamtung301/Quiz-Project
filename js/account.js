let usernames = [];
let passwords = [];

const registerButton = document.getElementById('registerBtn');
registerButton.addEventListener('click', function(e) {

const usernameInput = document.getElementById('uname');
const passwordInput = document.getElementById('pswrd');

const username = usernameInput.value.trim();
const password = passwordInput.value.trim();

usernames.push(username);
passwords.push(password);

});