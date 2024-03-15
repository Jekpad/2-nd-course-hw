function game1() {
    let monthNumber = Number(prompt(`Введите номер месяца`));
    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
        alert(`Зима`);
    } else if (monthNumber === 4 || monthNumber === 5 || monthNumber === 6) {
        alert(`Весна`);
    } else if (monthNumber === 7 || monthNumber === 8 || monthNumber === 9) {
        alert(`Осень`);
    } else if (monthNumber === 10 || monthNumber === 11 || monthNumber === 12) {
        alert(`Лето`);
    } else {
        alert(`Указанного месяца не существует`);
    }
}

function game2() {
    let fruits = ["Яблоко", "Груша", "Дыня", "Виноград", "Персик", "Апельсин", "Мандарин"];
    let answerCount = 0;

    fruits = fruits.sort(() => Math.random() - 0.5);

    alert(
        `Привет!
        \nСейчас на экране будет показан список слов, которые нужно запомнить и затем повторить в следующем окошке.
        \nГотов?
        \nПоехали!`
    );

    alert(
        `А вот и слова:
        \n${fruits.join(", ")}
        \n\nЗапомни их хорошенько и повтори в следующем окошке через запятую (,)`
    );

    let userAnswer = prompt("Повтори слова через запятую (,):") ?? "";

    userAnswer = userAnswer.split(",");
    userAnswer = userAnswer.map((item) => item.trim().toLowerCase());
    fruits = fruits.map((item) => item.trim().toLowerCase());
    let bufferAnswer = [];

    for (let item of userAnswer) {
        if (fruits.includes(item) && !bufferAnswer.includes(item)) {
            answerCount += 1;
            bufferAnswer.push(item);
        }
    }

    let result = Math.round((answerCount / fruits.length) * 100);
    console.log(userAnswer, answerCount, result);

    if (result > 0 && result <= 40) {
        alert(
            `Вы отгадали ${answerCount} из ${fruits.length}
            \nВ следующий раз постарайтесь лучше!`
        );
    } else if (result < 100) {
        alert(
            `Вы отгадали ${answerCount} из ${fruits.length}
            \nУспех так близок! Ещё разок?`
        );
    } else if (result <= 100) {
        alert(
            `Вы отгадали ${answerCount} из ${fruits.length}!
            \nWinner-winner, chicken dinner!`
        );
    } else if (result > 100) {
        alert(
            `Вы отгадали ${answerCount} из ${fruits.length}!
            \nНе знаю, как вы смогли переиграть меня, но это нехороший поступок >:C`
        );
    } else {
        alert(
            `Вы ничего не отгадали...
            \nПопробуйте ещё раз и перечитайте задание.`
        );
    }
}
