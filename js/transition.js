const body = document.getElementById('body');
const temporaryTitleIntro = document.getElementById('temporaryTitleIntro');
const modalIntro = document.getElementById('modalIntro');
const startBtn = document.getElementById('startBtn');
const titleModal = document.getElementById('titleModal');
const subtitleModal = document.getElementById('subtitleModal');

startBtn.addEventListener('click', function(){
    modalIntro.style.animation = 'modalToFull 1s ease forwards'
    modalIntro.querySelector("a").remove()
    modalIntro.style.position = 'absolute'
    modalIntro.style.gridTemplateRows = 'min-content auto'
    modalIntro.style.alignItems = 'end'
    startBtn.remove()
    temporaryTitleIntro.remove()

    titleModal.innerHTML = 'Adicionar Dívida'
    subtitleModal.innerHTML = 'Preencha os campos'
    setTimeout(() => {
        modalIntro.innerHTML += '<section class="btnRow"><button class="largeBtn translucentStyle"id="redoModalBtn" onclick="recarregarSite()">Voltar</button><button class="largeBtn oceanBlue"id="startBtn">Começar</button></section>'
        modalIntro.style.borderRadius = '0'

        
    }, 850);
})

function recarregarSite() {
    location.reload();
  }