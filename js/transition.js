const body = document.getElementById('body');
const temporaryTitleIntro = document.getElementById('temporaryTitleIntro');
const modalIntro = document.getElementById('modalIntro');
const startBtn = document.getElementById('startBtn');
const textModal = document.querySelectorAll('.textModal');

let formData = {
    debtName: '',
    totalDebt: 0,
    installmentsTotal: 0
};

startBtn.addEventListener('click', function () {
    modalIntro.style.animation = 'modalToFull 1s ease forwards'
    modalIntro.style.position = 'absolute'

    textModal.forEach(elemento => {
        elemento.style.alignItems = 'start';
    });
    temporaryTitleIntro.remove()

    titleModal.innerHTML = 'Adicionar Dívida'
    subtitleModal.innerHTML = 'Preencha os campos'
    showStep('step1');
    setTimeout(() => {
        modalIntro.style.borderRadius = '0'
    }, 850);
})

function reload() {
    location.reload();
}

function showStep(stepId) {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(stepId).classList.add('active');
}

document.getElementById('prevStep1').addEventListener('click', () => {
    showStep('step1');
});
document.getElementById('prevStep2').addEventListener('click', () => {
    showStep('step2');
});
document.getElementById('prevStep3').addEventListener('click', () => {
    showStep('step3');
});

document.getElementById('nextStep2').addEventListener('click', () => {
    formData.debtName = document.getElementById('inputDebtName').value;
    showStep('step2');
});

document.getElementById('nextStep3').addEventListener('click', () => {
    formData.totalDebt = parseFloat(document.getElementById('inputTotalDebt').value);
    body.classList.remove('bodyInit');
    modalIntro.style.animation = 'colorSelect 2s ease forwards'
    showStep('step3');
});
document.getElementById('nextStep4').addEventListener('click', () => {
    showStep('step4');
});

document.getElementById('finishForm').addEventListener('click', () => {
    formData.installmentsTotal = parseInt(document.getElementById('inputInstallments').value);
    localStorage.setItem('debtName', formData.debtName);
    localStorage.setItem('totalDebt', formData.totalDebt);
    localStorage.setItem('installmentsTotal', formData.installmentsTotal);
    localStorage.setItem('installmentsPaid', 0);

    document.getElementById('modalIntro').style.display = 'none';
    document.getElementById('paymentHome').style.display = 'block';
    const introContainer = document.querySelector('.intro');
    introContainer.remove()
    loadInfo();
});

let Theme;

const Themes = {
    blue: {
        backgroundGradient: 'linear-gradient(0deg, #0057B5 0%, #9D9BDC 100%)',
        backgroundSelectScreen: '#1a2d42ff',
        buttonColor:'#529cceff'
    },
    green: {
        backgroundGradient: 'linear-gradient(0deg, #008D87 0%, #7FCA92 100%)',
        backgroundSelectScreen: '#1a2e2dff',
        buttonColor:'#38A88C'
    },
    purple: {
        backgroundGradient: 'linear-gradient(0deg, #7C3A9E 0%, #9897D1 100%)',
        backgroundSelectScreen: '#4A2A5B',
        buttonColor:'#8D75D1'
    },
    yellow: {
        backgroundGradient: 'linear-gradient(0deg, #BB7C22 0%, #CBBEA7 100%)',
        backgroundSelectScreen: '#4d3b22ff',
        buttonColor:'#DEB372'
    },
    pink: {
        backgroundGradient: 'linear-gradient(0deg, #B52290 0%, #B8807D 100%)',
        backgroundSelectScreen: '#441f3aff',
        buttonColor:'#B66282'
    },
    red: {
        backgroundGradient: 'linear-gradient(0deg, #7C1817 0%, #B37677 100%)',
        backgroundSelectScreen: '#361818ff',
        buttonColor:'#DA6565'
    }
};

const radioButtons = document.querySelectorAll('input[name="themeColor"]');
const themeBackgroundButtons = document.querySelectorAll('.activeThemeBackground');

function applyTheme(event) {
    const valorSelecionado = event.target.value;
    console.log(event);

    for (const color in Themes) {
        if (color === valorSelecionado) {
            console.log(`Sucesso: "${color}"`);
            console.log(Themes[color].backgroundGradient)
            
            body.style.backgroundColor = Themes[color].backgroundSelectScreen
            themeBackgroundButtons.forEach(button => {
                button.style.backgroundColor = Themes[color].buttonColor
            });
        }
    }


}

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', applyTheme);
    console.log('clicou')
});