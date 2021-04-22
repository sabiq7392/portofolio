
$(document).ready(function(){

});  
// ======================
document.querySelector(".navbar-toggler").addEventListener("click", rotate);
function rotate() {
  let hum1 = document.querySelector(".humburger-satu");
  let hum2 = document.querySelector(".humburger-dua");
  let hum3 = document.querySelector(".humburger-tiga");
  hum1.classList.toggle("rotated_hum1");
  hum2.classList.toggle("d-none");
  hum3.classList.toggle("rotated_hum3");
}

function heroButtonSmall() {
  let buttonHero = document.querySelector(".kontak__button__sm");
  buttonHero.classList.toggle("changed");
}

window.addEventListener('scroll', reveal);
function reveal() {
  let reveal_i = document.querySelectorAll('.reveal-up');
  let reveal_j = document.querySelectorAll('.reveal-right');
  let reveal_k = document.querySelectorAll('.myBounce');
  
  for(let i = 0; i < reveal_i.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveal_i[i].getBoundingClientRect().top;
    let revealpoint = 0;

    if(revealtop < windowheight - revealpoint) {
      reveal_i[i].classList.add('active');
    }
    else {
      reveal_i[i].classList.remove('active');
    }
  }
  // ------------------------------------------------
  for(let j = 0; j < reveal_j.length; j++) {
    let windowheight_j = window.innerHeight;
    let revealtop_j = reveal_j[j].getBoundingClientRect().top;
    let revealpoint_j = 0;

    if(revealtop_j < windowheight_j - revealpoint_j) {
      reveal_j[j].classList.add('active');
    }
    else {
      reveal_j[j].classList.remove('active');
    }
  }
  //--------------------------------------------------
  for(let k = 0; k < reveal_k.length; k++) {
    let windowheight_k = window.innerHeight;
    let revealtop_k = reveal_k[k].getBoundingClientRect().top;
    let revealpoint_k = 50;

    if(revealtop_k < windowheight_k - revealpoint_k) {
      reveal_k[k].classList.add('active');
    }
    else {
      reveal_k[k].classList.remove('active');
    }
  }
}


