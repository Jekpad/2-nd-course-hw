// 1
let password = "aswxca";
let userPassword = prompt(`Введите пароль`);
password === userPassword ? alert(`Пароль введен верно`) : alert(`Пароль введен неправильно`);

// 2
let c = 2;
let result = 0 < c && c < 10 ? "Верно" : "Неверно";
console.log(result);

// 3
let d = 8,
  e = 4;
result = d > 100 || e > 100 ? "Верно" : "Неверно";
console.log(result);

// 4
let a = "2";
let b = "3";
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
alert(+a + +b);

// 5
let monthNumber = Number(prompt(`Введите номер месяца`));
switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    alert(`Зима`);
    break;
  case 3:
  case 4:
  case 5:
    alert(`Весна`);
    break;
  case 6:
  case 7:
  case 8:
    alert(`Лета`);
    break;
  case 9:
  case 10:
  case 11:
    alert(`Осень`);
    break;
  default:
    alert(`Указанного месяца не существует`);
    break;
}

// 6
// Вёрстка

// 7
let inputNumber = Number(prompt(`Пожалуйста, введите любое число`));
if (typeof inputNumber !== "number" || isNaN(inputNumber)) {
  alert(`Вы ввели не число`);
} else if (inputNumber === 0) {
  alert(`Вы указали 0`);
} else {
  if (inputNumber % 2 === 0) {
    alert(`Число четное`);
  } else {
    alert(`Число нечетное`);
  }
}
// 8
let clientOS = window.navigator.userAgent;
let clientDeviceYear = 0;
let OS = "";
if (clientOS.indexOf("Android") != -1) OS = "Android";
else if (clientOS.indexOf("iOS") != -1) OS = "iOS";
else if (clientOS.indexOf("Win") != -1) OS = "Windows";
else if (clientOS.indexOf("Mac") != -1) OS = "MacOS";
else if (clientOS.indexOf("X11") != -1) OS = "UNIX";
else if (clientOS.indexOf("Linux") != -1) OS = "Linux";
let message = OS.length === 0 ? "Воспользуйтесь WEB-версией по ссылке" : `Установите версию приложения для ${OS} по ссылке`;
console.log(message);

// 8 v2
clientOS = 2;
clientDeviceYear = 0;
OS = "";
if (clientOS === 1) OS = "Android";
else if (clientOS === 0) OS = "iOS";
else OS = "";
message = OS.length === 0 ? "Воспользуйтесь WEB-версией по ссылке" : `Установите версию приложения для ${OS} по ссылке`;
console.log(message);

// 9
clientOS = 1;
clientDeviceYear = 2014;
OS = "";

if (clientOS === 1) {
  OS = clientDeviceYear >= 2015 ? "Android" : (OS = "Android LTS");
} else if (clientOS === 0) {
  OS = clientDeviceYear >= 2015 ? "iOS" : (OS = "iOS LTS");
} else OS = "";

message = OS.length === 0 ? "Воспользуйтесь WEB-версией по ссылке" : `Установите версию приложения для ${OS} по ссылке`;
console.log(message);
