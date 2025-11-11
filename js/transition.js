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

document.getElementById('nextStep2').addEventListener('click', () => {
    formData.debtName = document.getElementById('inputDebtName').value;

    showStep('step2');
});

document.getElementById('prevStep1').addEventListener('click', () => {
    showStep('step1');
});
document.getElementById('prevStep2').addEventListener('click', () => {
    showStep('step2');
});

document.getElementById('nextStep3').addEventListener('click', () => {
    formData.totalDebt = parseFloat(document.getElementById('inputTotalDebt').value);
    showStep('step3');
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