let menu=document.querySelector('#menu-bar')
let nav=document.querySelector('.navbar')
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('shiv');
});
window.onscroll =()=>{
    menu.classList.remove('fa-times');
    nav.classList.remove('shiv');
}