//// MODAL LOGOUT
const config = document.querySelector('.configuracoes')
const modalConfig = document.querySelector('.modalLogout')
const sair = document.querySelector('.sair')
config.addEventListener('click', () => {
    modalConfig.showModal();
})

sair.addEventListener('click', () => {
    //localStorage.removeItem("usuario");
    window.location.href="index.html";
});






 //// MODAL ESCOLHA ESPECIALIDADES
const btnCadastroModal = document.querySelector('.novoInteresse');
const btnFecharModal = document.querySelector('#optionClose');
const modal = document.querySelector('.modalInteresses');

btnCadastroModal.addEventListener('click', ()=> {
    modal.showModal();
})


btnFecharModal.addEventListener('click', ()=> {
    modal.close();
})



