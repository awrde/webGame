const input = document.querySelector('.inputJs');

let numbers = [1,2,3,4,5,6,7,8,9];

let numberArray = [];

for (let i = 0; i < 4; i += 1) {
    let result = numbers.splice(Math.floor(Math.random() * (9 -i)), 1)[0];
    numberArray.push(result);
}

console.log(numberArray);

// 배열.join('') -> 문자
// 문자.split('') -> 배열