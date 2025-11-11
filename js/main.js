const financeMainCard = document.getElementById('financeMainCard');

const payBtn = document.getElementById('payBtn');
const redoBtn = document.getElementById('redoBtn');
const payName = document.getElementById('payName');
const paidValue = document.getElementById('paidValue');
const missValue = document.getElementById('missValue');
const paidBar = document.getElementById('paidBar');
const installmentsInfo = document.getElementById('installmentsInfo');

let debtName = 'Nintendo Switch 2'
let installmentsPaid = 1
let installmentsTotal = 20
let totalDebt = 4099




function loadInfo() {
    let totalPaid = (totalDebt / installmentsTotal * installmentsPaid)
    payName.innerHTML = debtName;
    paidValue.innerHTML = formatToBRL(totalPaid);
    missValue.innerHTML = formatToBRL(totalDebt);
    installmentsInfo.innerHTML = `${installmentsPaid} de ${installmentsTotal} Parcelas pagas`

    setTimeout(() => {
        paidBar.style.width = getPercentageOf(totalPaid, totalDebt) + '%';
    }, 100);
}

payBtn.addEventListener('click', function () {
    if (installmentsPaid <installmentsTotal) {
        installmentsPaid = installmentsPaid + 1
    }
    console.log(installmentsPaid)
    loadInfo()
});

redoBtn.addEventListener('click', function () {
    if (installmentsPaid > 0) {
        installmentsPaid = installmentsPaid - 1
    }
    console.log(installmentsPaid)
    loadInfo()
});


function formatToBRL(value) {
    if (isNaN(value)) return 'Valor inválido';

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function getPercentageOf(value, total) {
    if (total === 0) return 0;
    return (value / total) * 100;
}


