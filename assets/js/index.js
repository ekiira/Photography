const buttonShow = document.getElementById('btnShow')
const buttonHide = document.getElementById('btnHide')

const hide = document.getElementById('hidden')

buttonShow.addEventListener('click', () => {
  hide.style.display = 'block'
  buttonShow.style.display = 'none'
  buttonHide.style.display = 'block'
  buttonHide.style.textAlign = 'center'
})

buttonHide.addEventListener('click', () => {
  hide.style.display = 'none'
  console.log('mee')
  buttonHide.style.display = 'none'
  buttonShow.style.display = 'block'
  buttonShow.style.textAlign = 'center'
})
