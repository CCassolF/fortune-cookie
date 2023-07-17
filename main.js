const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const luck = document.querySelector('#luck')
const btn = document.querySelector('#btn')


luck.addEventListener('click', handleClick)
btn.addEventListener('click', handleClick)


function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleClick() {
  toggleScreen()
}