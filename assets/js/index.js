const buttonShow = document.getElementById('btnShow');
const buttonHide = document.getElementById('btnHide');
const hide = document.getElementById('hidden');
const mobiHide = document.getElementById('mobi-hidden');

buttonShow.addEventListener('click', () => {
  hide.style.display = 'block';
  mobiHide.style.display = 'block';

  buttonShow.style.display = 'none';
  buttonHide.style.display = 'block';
  buttonHide.style.textAlign = 'center';
});

buttonHide.addEventListener('click', () => {
  hide.style.display = 'none';
  mobiHide.style.display = 'none';

  buttonHide.style.display = 'none';
  buttonShow.style.display = 'block';
  buttonShow.style.textAlign = 'center';
});
