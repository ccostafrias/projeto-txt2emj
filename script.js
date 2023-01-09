const bttnCopy = document.getElementById('bttn-copy')
const bttnGenerate = document.getElementById('bttn-generate')
const txtTransform = document.getElementById('txt-transform')
const txtTranslate = document.getElementById('txt-generated')
const copyPopup = document.getElementById('copy-pop')
const characters = {'0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '?': 'question', '!': 'exclamation', '+': 'heavy_plus_sign', '-': 'heavy_minus_sign', '=': 'heavy_equals_sign', '#': 'hash', '*': 'asterisk'}
const letters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

bttnCopy.addEventListener("click", function () {
    let input = document.createElement('input')
    input.type = 'text'
    input.value = txtTranslate.value
    document.body.appendChild(input)
    input.select();
	document.execCommand("copy")
	document.getSelection().removeAllRanges()
    input.remove()
    copyPopup.classList.add("active")
    setTimeout(() => {
        copyPopup.classList.remove("active")
    }, 2000);
})

// Começa a verificação após clicar no botão 'Generate'
bttnGenerate.addEventListener('click', function () {
    transformTxt()
})

function transformTxt(){
    txtTranslate.value = ''
    let inputText = txtTransform.value
    for (let i = 0; i < inputText.length; i++) {
        // Obtém o caractere atual
        var character = String(inputText).charAt(i).toLowerCase()
        
        // Verifica o caractere e adiciona o emoji correspondente à variável translatedText
        if (character == " "){
            txtTranslate.value += ' :blue_square: '
        }
        else if (letters.indexOf(character) != -1){
            txtTranslate.value += ` :regional_indicator_${character}: `
        }
        else if (characters[character] != undefined){
            txtTranslate.value += ` :${characters[character]}: `
        }
        else{
            txtTranslate.value += character
        }
      }
}

