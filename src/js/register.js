const logInBtn = document.querySelector('.btn-connexion');
const logInForm = document.querySelector('.connexion');
const registerBtn = document.querySelector('.btn-enregistrer');
const registerForm = document.querySelector('.enregistrer');

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
