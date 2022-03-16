const tab_1 = document.querySelector('.lang_1');
const tab_2 = document.querySelector('.lang_2');
const exchange_btn = document.querySelector('#btn')

const text_1 = document.querySelector('#text_1');
const text_2 = document.querySelector('#text_2');

const español = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
const morse = ['· —', '— · · ·', '— · —', '— · ·', '·', '· · — ·', '— — ·', '· · · ·', '· ·', '· — — —', '— · —', '· — · ·', '— —', '— ·', '— — · — —', '— — —', '· — — ·', '— — · —', '· — ·', '· · ·', '—', '· · —', '· · · —', '· — —', '— · · —', '— · — —', '— — · ·', '/']

const es = 'Español';
const mor = 'Morse'

tab_1.innerText = es
tab_2.innerText = mor


exchange_btn.addEventListener('click', () => {

    if(tab_1.textContent === es && tab_2.textContent === mor){
        tab_1.innerText = mor
        tab_2.innerText = es
        return
    }
    tab_1.innerText = es
    tab_2.innerText = mor
})

text_1.addEventListener('input', (e) => {
    const word = e.target.value;
    const wordList = word.split('')
    const idioma = tab_1.textContent;
    if ( idioma === 'Español' ){
        const result = morseToEspañol(wordList);
        if(result !== undefined){
            text_2.innerText = result;
        }
    }

})


function morseToEspañol(letterArr){
    let newText = ''

    for (const letter of letterArr){
        let letterTranslation = morse[español.indexOf(letter)]
        newText += letterTranslation;
        newText += '  ';
    }

    return newText;
}

function españolToMorse(letterArr){

}






