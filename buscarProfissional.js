//// MODAL LOGOUT
/* const config = document.querySelector('.configuracoes')
const modalConfig = document.querySelector('.modalLogout')
const sair = document.querySelector('.sair')
config.addEventListener('click', () => {
    modalConfig.showModal();
})

sair.addEventListener('click', () => {
    //localStorage.removeItem("usuario");
    window.location.href="index.html";
}); */



const svgBtn = document.querySelector('.svgBtn')
svgBtn.addEventListener('click', () => {

    var inputBusca = document.querySelector('#inputBusca')
    var resultadoBusca = inputBusca.value

    if(resultadoBusca == "José"){
       
    location.href ="resultadoBusca.html"
        
    } else{
        //var create = document.createElement('class', 'resultadoNaoEncontrado');
        var perfilPP = document.querySelector('.perfilPP')

        perfilPP.innerHTML+=`<div class="resultadoNaoEncontrado">
        <p id="novoInteresse">Não encontramos nada para sua busca :(</p>
    </div>`
    setTimeout(()=>{
        location.href ="buscarProfissional.html"
    },5000)

    }
});