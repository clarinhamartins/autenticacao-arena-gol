// Inicializa os ícones da biblioteca Lucide
lucide.createIcons();

/* ==========================================================================
   ELEMENTOS DO DOM
   ========================================================================== */
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const btnLoginSubmit = document.getElementById('btn-login-submit');
const btnRegisterSubmit = document.getElementById('btn-register-submit');

const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

const regName = document.getElementById('reg-name');
const regEmail = document.getElementById('reg-email');
const regPassword = document.getElementById('reg-password');
const regPasswordConfirm = document.getElementById('reg-password-confirm');
const termsAgree = document.getElementById('terms-agree');
const passwordMatchError = document.getElementById('password-match-error');

/* ==========================================================================
   FUNÇÕES DE VALIDAÇÃO
   ========================================================================== */
function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function hasLettersAndNumbers(string) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
    return regex.test(string);
}

/* ==========================================================================
   MICRO-INTERAÇÃO: TOGGLE DE VISIBILIDADE DA SENHA (CORRIGIDO)
   ========================================================================== */
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function() {
        const passwordInput = this.closest('.password-wrapper').querySelector('input');
        const icon = this.querySelector('i') || this.querySelector('svg');
        
        if (!passwordInput || !icon) return;
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.setAttribute('data-lucide', 'eye-off'); 
        } else {
            passwordInput.type = 'password';
            icon.setAttribute('data-lucide', 'eye'); 
        }
        
        lucide.createIcons();
    });
});

/* ==========================================================================
   VALIDAÇÃO EM TEMPO REAL: LOGIN
   ========================================================================== */
function validateLoginForm() {
    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value;

    const emailCheck = isEmailValid(emailValue);
    const passwordCheck = passwordValue.length >= 8 && hasLettersAndNumbers(passwordValue);

    loginEmail.style.borderColor = (emailValue.length > 5 && !emailCheck) ? "#FF4D4D" : "";

    if (emailCheck && passwordCheck) {
        btnLoginSubmit.removeAttribute('disabled');
    } else {
        btnLoginSubmit.setAttribute('disabled', 'true');
    }
}

['input', 'change'].forEach(eventType => {
    [loginEmail, loginPassword].forEach(element => {
        element.addEventListener(eventType, validateLoginForm);
    });
});

/* ==========================================================================
   VALIDAÇÃO EM TEMPO REAL: CADASTRO
   ========================================================================== */
function validateRegisterForm() {
    const emailValue = regEmail.value.trim();
    
    const isNameValid = regName.value.trim().length > 2;
    const emailCheck = isEmailValid(emailValue);
    const isPasswordValid = regPassword.value.length >= 8 && hasLettersAndNumbers(regPassword.value);
    const passwordsMatch = regPassword.value === regPasswordConfirm.value;
    const isTermsChecked = termsAgree.checked;

    regEmail.style.borderColor = (emailValue.length > 5 && !emailCheck) ? "#FF4D4D" : "";

    if (regPasswordConfirm.value.length > 0 && !passwordsMatch) {
        passwordMatchError.classList.remove('hidden');
    } else {
        passwordMatchError.classList.add('hidden');
    }

    if (isNameValid && emailCheck && isPasswordValid && passwordsMatch && isTermsChecked) {
        btnRegisterSubmit.removeAttribute('disabled');
    } else {
        btnRegisterSubmit.setAttribute('disabled', 'true');
    }
}

['input', 'change'].forEach(eventType => {
    [regName, regEmail, regPassword, regPasswordConfirm].forEach(element => {
        element.addEventListener(eventType, validateRegisterForm);
    });
});

termsAgree.addEventListener('change', validateRegisterForm);

/* ==========================================================================
   NAVEGAÇÃO ALTERNATIVA
   ========================================================================== */
function switchMode(mode) {
    document.querySelectorAll('input').forEach(input => {
        if (input.id.includes('password')) {
            input.type = 'password';
        }
    });

    document.querySelectorAll('.toggle-password i, .toggle-password svg').forEach(icon => {
        icon.setAttribute('data-lucide', 'eye');
    });
    lucide.createIcons();
    
    if (mode === 'register') {
        loginSection.classList.add('hidden');
        registerSection.classList.remove('hidden');
        regName.focus();
    } else {
        registerSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
        loginEmail.focus();
    }
}

/* ==========================================================================
   FEEDBACK DE SUBMIT
   ========================================================================== */
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const btnText = btnLoginSubmit.querySelector('.btn-text');
    const spinner = btnLoginSubmit.querySelector('.spinner');

    btnLoginSubmit.setAttribute('disabled', 'true');
    btnText.textContent = 'Conectando à Arena...';
    spinner.classList.remove('hidden');

    setTimeout(() => {
        alert('Acesso autorizado! Bem-vindo à Arena Gol.');
        btnLoginSubmit.removeAttribute('disabled');
        btnText.textContent = 'Entrar na Arena';
        spinner.classList.add('hidden');
    }, 2000);
});

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Conta criada com sucesso! Agora pode fazer o seu login.');
    switchMode('login');
});