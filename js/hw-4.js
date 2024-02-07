// 1
for (let index = 0; index < 2; index++) {
  console.log("Привет!");
}

// 2
for (let index = 1; index <= 5; index++) {
  console.log(index);
}

// 3
for (let index = 7; index <= 22; index++) {
  console.log(index);
}

// 4
let obj = {
  Коля: 200,
  Вася: 300,
  Петя: 400,
};
for (let name in obj) {
  console.log(`${name} - зарплата ${obj[name]} долларов`);
}

// 5
let n = 1000;
let num = 0;
while (n > 50) {
  n /= 2;
  num++;
}
console.log(num);

// 6
let firstFriday = 3;
while (firstFriday < 31) {
  console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`);
  firstFriday += 7;
}
