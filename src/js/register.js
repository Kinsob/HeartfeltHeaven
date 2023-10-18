const logInBtn = document.querySelector('.menu__btn-login');
const logInForm = document.querySelector('.login');
const registerBtn = document.querySelector('.menu__btn-register');
const registerForm = document.querySelector('.register');

const handleLogIn = () => {
	logInBtn.classList.remove('active');
	logInForm.classList.remove('remove-section');
	registerBtn.classList.add('active');
	registerForm.classList.add('active-section');
};

const handleRegister = () => {
	logInBtn.classList.add('active');
	logInForm.classList.add('remove-section');
	registerBtn.classList.remove('active');
	registerForm.classList.remove('active-section');
};


logInBtn.addEventListener('click', handleLogIn);
registerBtn.addEventListener('click', handleRegister);
