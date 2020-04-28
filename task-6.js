
const numbers = [];
let total = 0;

const inputAnumber = function (items) {
  do {
    let input = prompt("Введите любое число!");

    

    input = Number(input);

    for (let numbers of number) {
        numbers.push(`numbers: ${i}`);
        const notANumber = Number.isNaN(input);
    if (notANumber) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }
    if (input === null) {
        break;
      }  
    }
    total += input;
};

alert(`Общая сумма чисел равна ${total}`);
console.log(`Общая сумма чисел равна ${total}`);
