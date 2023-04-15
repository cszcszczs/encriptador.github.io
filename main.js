import { codificar, decodificar } from './encripter.js'

const $input = document.querySelector('#texto')
const $buttonEncrip = document.querySelector('#encriptar')
const $buttonDesencrip = document.querySelector('#desencriptar')
const $divTexto = document.querySelector('#textoFinal')
const $buttonCopiar = document.querySelector('#copiar')
const $divNingunMsj = document.querySelector('#ningun-mensaje-contenedor')
const $divOcultar = document.querySelector('.ocultar')

let frase = ''

function encriptar() {
  const regex = /[A-ZÀ-ÿ]/g

  if (regex.test($input.value) || $input.value === '') return

  frase = codificar($input.value)
  $divTexto.innerHTML = `<p>${frase}</p>`
  $input.value = ''
  $input.focus()
  $divNingunMsj.style.display = 'none'
  $divOcultar.style.display = 'block'
}

function desencriptar() {
  const regex = /[A-ZÀ-ÿ]/g

  if (regex.test($input.value) || $input.value === '') return

  frase = decodificar($input.value)
  $divTexto.innerHTML = `<p>${frase}</p>`
  $input.value = ''
  $input.focus()
  $divNingunMsj.style.display = 'none'
  $divOcultar.style.display = 'block'
  $buttonDesencrip.removeAttribute('disabled')
}

function copiar() {
  navigator.clipboard.writeText($divTexto.innerText)
}

$buttonEncrip.addEventListener('click', encriptar)
$buttonDesencrip.addEventListener('click', desencriptar)
$buttonCopiar.addEventListener('click', copiar)
