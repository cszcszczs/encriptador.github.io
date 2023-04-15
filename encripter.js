const letterEncrip = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
}

const letterDescrip = {}

function createLetterDescrip() {
  Object.entries(letterEncrip).map(([key, value]) => {
    letterDescrip[value] = key
  })
}

export function codificar(word) {
  const wordSplit = word.split('')
  let encripted = ''

  wordSplit.forEach((letter) => {
    encripted += letterEncrip[letter] ?? letter
  })

  return encripted
}

export function decodificar(word) {
  // create object desencript
  createLetterDescrip()

  const wordSplite = word.split(' ')
  const wordDescodificada = []

  wordSplite.forEach((item) => {
    let string = ''

    Object.entries(letterDescrip).forEach(([key, value]) => {
      let index = item.indexOf(key)

      if (index > -1 && string === '') {
        string += item.replaceAll(key, value)
      } else if (index > -1) {
        string = string.replaceAll(key, value)
      }
    })

    if (string !== '') {
      wordDescodificada.push(string)
    }
  })

  return wordDescodificada.length > 0 ? wordDescodificada.join(' ') : word
}
