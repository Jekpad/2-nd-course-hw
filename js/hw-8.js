// 1
let people = [
    { name: "Глеб", age: 29 },
    { name: "Анна", age: 17 },
    { name: "Олег", age: 7 },
    { name: "Оксана", age: 47 },
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(
    people.sort((a, b) => {
        return a.age - b.age;
    })
);

// 2
function isPositive(number) {
    if (!isNaN(+number) && number > 0) return true;
    else return false;
}

function isMale(element) {
    if (element === "male") return true;
    else return false;
}

function filter(array, filterFunction) {
    let output = [];
    if (filterFunction.name == "isPositive") {
        for (let element of array) {
            if (filterFunction(element) === true) {
                output.push(element);
            }
        }
    }

    if (filterFunction.name == "isMale") {
        for (let element of array) {
            if (filterFunction(element.gender) === true) {
                output.push(element);
            }
        }
    }

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

people = [
    { name: "Глеб", gender: "male" },
    { name: "Анна", gender: "female" },
    { name: "Олег", gender: "male" },
    { name: "Оксана", gender: "female" },
];

console.log(filter(people, isMale));

// 3
const timer = (interval, deadline) => {
    if (isNaN(+interval) || isNaN(+deadline)) {
        console.log("Одно из значений времени некорректно");
        return;
    }

    const repeat = setInterval(() => {
        console.log(new Date());
    }, 3 * 1000);

    setTimeout(() => {
        clearInterval(repeat);
    }, deadline * 1000);
};

// timer(3, 30);

// 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log("Привет, Глеб!");
});

// 5
// Функция delayForSecond через 1 секунду пишет в консоль
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log("Прошла одна секунда");
        if (cb) {
            cb();
        }
    }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => {
    sayHi("Глеб");
});
