const buttonShow = document.getElementById('btnShow');
const buttonHide = document.getElementById('btnHide');
const hidewrapper = document.getElementById('hide-btn');
const category = document.querySelectorAll(".categories");

const hide = document.getElementById('hidden');
const mobiHide = document.getElementById('mobi-hidden');

const loader = document.querySelector(".loader");
const elmnt = document.getElementById("gallery-wrapper");

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

  elmnt.scrollIntoView();
});

// Preloader fades after 3000ms  
window.addEventListener('load', function () {
  setTimeout(() => {
    loader.className += " hidden";
  }, 3000)
});

// Changing Portfolio Menu active state
const links = [...category]

links.map((link, i) => {
  link.addEventListener('click', (event) => {
    const inactiveLinks = links.filter((linkData, i) => linkData.innerHTML !== event.target.innerHTML);
   
    inactiveLinks.map(inaactive => {
      inaactive.classList.remove("selected")
    })

    link.classList.add("selected")
  }) 
});