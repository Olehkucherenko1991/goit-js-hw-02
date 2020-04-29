let input;
const numbers = [];
let total = 0;

do {
  let input = prompt("Введите любое число!");

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else if (input === null) {
    break;
  }

  numbers.push(Number(input));
} while (true);

if (numbers.length === 0) {
  for (let number of numbers) {
    total += number;
  }
}

alert(`Общая сумма чисел равна ${total}`);
console.log(`Общая сумма чисел равна ${total}`);
