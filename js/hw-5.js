// 1
let num1 = 4;
let num2 = 8;
console.log(compareNumbers(num1, num2));

function compareNumbers(num1, num2) {
    if (!isVariableNumber(num1) || !isVariableNumber(num2)) {
        return "Одно или оба значения не являются числом";
    }
    return num1 > num2 ? num1 : num2;
}

// 2
console.log(checkParity(num1));

function checkParity(num) {
    if (!isVariableNumber(num)) {
        return "Значение не является числом";
    }
    return num % 2 === 0 ? "Число чётное" : "Число не чётное";
}

// 3.1
numberPowLog(num1);

function numberPowLog(num) {
    if (!isVariableNumber(num)) {
        return "Значение не является числом";
    }
    console.log(num ** 2);
}

// 3.2
console.log(numberPow(num2));

function numberPow(num) {
    if (!isVariableNumber(num)) {
        return "Значение не является числом";
    }
    return num ** 2;
}

// 4
askUserAge();

function askUserAge() {
    let year = prompt("Сколько вам лет?");

    if (!isVariableNumber(year)) {
        alert("Вы ввели неправильное значение!");
        return;
    }
    year = Number(year);

    if (0 <= year && year <= 12) {
        alert("Привет, друг!");
        return;
    } else if (year >= 13) {
        alert("Добро пожаловать!");
        return;
    }

    alert("Вы ввели неправильное значение!");
}

// 5
console.log(checkVariables(num1, num2));

function checkVariables(num1, num2) {
    if (!isVariableNumber(num1) || !isVariableNumber(num2)) {
        return "Одно или оба значения не являются числом";
    } else {
        return num1 * num2;
    }
}

// 6
userCube();

function userCube() {
    let number = prompt("Введите число");

    if (!isVariableNumber(number)) {
        alert("Переданный параметр не является числом");
        return;
    }
    number = Number(number);
    alert(`${number} в кубе равняется ` + number ** 3);
}

// 7
class Circle {
    radius = 0;

    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return (Math.PI * this.radius ** 2).toFixed(2);
    }

    getPerimeter() {
        return (Math.PI * this.radius * 2).toFixed(2);
    }
}

let circle1 = new Circle(5);
let circle2 = new Circle(8);

console.log(circle1.getArea(), circle1.getPerimeter());
console.log(circle2.getArea(), circle2.getPerimeter());

// 8
// Макет в index.html
// Игра в game.js

// Остальное
function isVariableNumber(variable) {
    if (parseInt(variable) === Number(variable) && !isNaN(variable) && typeof variable != "undefined") {
        return true;
    }
    return false;
}
