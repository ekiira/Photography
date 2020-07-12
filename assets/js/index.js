const buttonShow = document.getElementById('btnShow');
const buttonHide = document.getElementById('btnHide');
const hidewrapper = document.getElementById('hide-btn');

const hide = document.getElementById('hidden');
const mobiHide = document.getElementById('mobi-hidden');

const loader = document.querySelector(".loader");

// View hidden portfolio images
buttonShow.addEventListener('click', () => {
  hide.style.display = 'block';
  mobiHide.style.display = 'block';

  buttonShow.style.display = 'none';
  buttonHide.style.display = 'block';
});

buttonHide.addEventListener('click', () => {
  hide.style.display = 'none';
  mobiHide.style.display = 'none';

  buttonHide.style.display = 'none';
  buttonShow.style.display = 'block';
  buttonShow.style.textAlign = 'center';
});


// Preloader fades after 3000ms  
window.addEventListener("load", function () {
  setTimeout(() => {
    loader.className += " hidden";
  }, 3000)
});
