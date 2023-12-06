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