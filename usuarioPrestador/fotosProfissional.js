// CHAMADA MODAL

var modalFotos = document.querySelector('.imgListFotos')
var upFoto = document.querySelector('.upFoto')
modalFotos.addEventListener('click', ()=> {
    upFoto.showModal()
})

var closedModal = document.querySelector('.closedModal')
closedModal.addEventListener('click', () =>{
    upFoto.close()
    })
    