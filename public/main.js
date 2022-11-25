const openMenu = document.querySelector('#openMenu'); 
const navBarMobile = document.querySelector('#navBarMobile');
const closeMenu = document.querySelector('#closeMenu');



openMenu.addEventListener('click', ()=>{
  
navBarMobile.classList.toggle('hidden')
    


})

closeMenu.addEventListener('click', ()=>{
  

    navBarMobile.classList.toggle('hidden')

})