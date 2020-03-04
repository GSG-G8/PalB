const goSignUpBtn = document.querySelector('.go-signUp');
const goLoginBtn = document.querySelector('.go-login');
const body = document.querySelector('.body');
const goTologin = document.querySelector('.go-to-signUp');
const goTosignup = document.querySelector('.go-to-login');
const ContainerSignUp = document.querySelector('.signup');
const ContainerLogin = document.querySelector('.login');

goSignUpBtn.addEventListener('click', () => {
  body.style.gridTemplateColumns = '70% 30%';
  goTologin.style.gridColumn = '2'
  ContainerLogin.style.gridColumn = '1';
  goTosignup.style.display = 'none';
  ContainerSignUp.style.display = 'none';
  goTologin.style.display = 'flex';
  ContainerLogin.style.display = 'flex';
});

goLoginBtn.addEventListener('click', () => {
  goTosignup.style.gridColumn = '2'
  ContainerSignUp.style.gridColumn = '1';
  goTologin.style.display = 'none';
  ContainerLogin.style.display = 'none';
  goTosignup.style.display = 'flex';
  ContainerSignUp.style.display = 'flex';
});