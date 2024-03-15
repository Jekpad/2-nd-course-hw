// 1
let string = "js";
console.log(string.toUpperCase());

// 2
let array = ["Яблоки", "Груши", "Апельсины", "Ананасы", "Айва"];
let userSearch = "АП";
function findInArray(haystack, needle) {
    return haystack.filter((item) => item.toLowerCase().startsWith(needle.toLowerCase()));
}
console.log(findInArray(array, userSearch));

// 3
let num = 32.58884;
function getAllRoundValues(number) {
    return [Math.floor(number), Math.ceil(number), Math.round(number)];
}
console.log(getAllRoundValues(num));

// 4
array = [52, 53, 49, 77, 21, 32];
function findMinMaxValues(haystack) {
    console.log(Math.min(...haystack), Math.max(...haystack));
}
findMinMaxValues(array);

// 5
function getRandomValue() {
    return Math.round(Math.random() * (10 - 1) + 1);
}
console.log(getRandomValue());

// 6
num = 9;
function generateRandomNumbers(maxValue) {
    let array = [];
    for (let i = 0; i < Math.floor(maxValue / 2); i++) {
        array.push(Math.round(Math.random() * maxValue));
    }
    return array;
}
console.log(generateRandomNumbers(9));

// 7
num = 17;
let num2 = 5;
function generateRandmomNumberInRange(minValue, maxValue) {
    if (minValue > maxValue) {
        let buferNum = minValue;
        minValue = maxValue;
        maxValue = buferNum;
    }
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

// 8
function getCurrentDate() {
    return new Date();
}
console.log(getCurrentDate());

// 9
let currentDate = new Date();
let daysOffset = 73;
function getFutureDate(date, daysOffset) {
    date.setDate(date.getDate() + daysOffset);
    return date;
}
console.log(getFutureDate(currentDate, daysOffset));

// 10
function formatDateInRussian(date) {
    if (typeof date.getMonth() === "function") {
        return "Функция принимает только объект Дата";
    }
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}
    \nВремя: ${beautifyTime(date.getHours())}:${beautifyTime(date.getMinutes())}:${beautifyTime(date.getSeconds())}`;
}

function beautifyTime(number) {
    return number < 10 ? `0${number}` : number;
}

console.log(formatDateInRussian(new Date()));
