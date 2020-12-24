const ask = document.querySelector('.ask');
const form = document.querySelector('.formStr');
const input = document.querySelector('.inputStr');
const btn = document.querySelector('.btnStr');
const result = document.querySelector('.result');

function lanchStr(event) {
    event.preventDefault();
    if(ask.innerText[ask.innerText.length - 1] === input.value[0]) {
        result.innerText = '정답이네요!';
        ask.innerText = input.value;
        input.value = '';
        input.focus();
    } else {
        result.innerText = '아쉽네요..';
        input.value = '';
        input.focus();
    }
}


btn.addEventListener('click', lanchStr);