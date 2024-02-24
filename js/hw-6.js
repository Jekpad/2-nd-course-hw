// 1
let array = [1, 5, 4, 10, 0, 3];
for (let item of array) {
  console.log(item);
  if (item === 10) break;
}

// 2
array = [1, 5, 4, 10, 0, 3];
console.log(array.indexOf(4));

// 3
array = [1, 3, 5, 10, 20];
console.log(array.join(" "));

// 4
array = [];
for (let i = 0; i < 3; i++) {
  let nestArray = [];
  for (let i = 0; i < 3; i++) {
    nestArray.push(1);
  }
  array.push(nestArray);
}
console.log(array);

// 5
array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);

// 6
array = [9, 8, 7, "a", 6, 5];
array = array.filter((item) => typeof item === "number");
array.sort();
console.log(array);

// 7
array = [9, 8, 7, 6, 5, 0];
let answer = prompt("Угадай число", "");
answer = isVariableNumber(answer) ? Number(answer) : undefined;
let result = array.indexOf(answer) >= 0 ? "Ты угадал!" : "В следующий раз повезёт!";
alert(result);

// 8
let string = "abcdef";
console.log(string.split("").reverse().join(""));

// 9
array = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(array.flat());

// 10
array = [2, 5, 1, 4, 8, 9, 11, 5];
for (let i = 0; i < array.length - 1; i++) {
  console.log(array[i] + array[i + 1]);
}

// 11
function powElements(array) {
  return array.map((item) => item ** 2);
}
console.log(powElements(array));

// 12
array = ["слово", "", "слог", "длинное предложение", "буква"];
function getLengthWords(array) {
  return array.map((item) => item.length);
}
console.log(getLengthWords(array));

// 13
function filterPositive(array) {
  return array.filter((item) => item < 0);
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

// 14
array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.round(Math.random() * 10));
}
filteredArray = array.filter((item) => item % 2 == 0);
console.log(array, filteredArray);

// 15
array = [];
for (let i = 0; i < 6; i++) {
  array.push(Math.round(Math.random() * 10));
}
result = array.reduce((accumulator, current) => accumulator + current) / array.length;
console.log(array, parseFloat(result).toFixed(2));

// Остальное
function isVariableNumber(variable) {
  if (parseInt(variable) === Number(variable) && !isNaN(variable) && typeof variable != "undefined") {
    return true;
  }
  return false;
}
