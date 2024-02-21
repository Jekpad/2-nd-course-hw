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
