// 1
let a = 10;
alert(a);
a = 20;
alert(a);

// 2
let iPhoneReleaseYear = 2007;
alert(iPhoneReleaseYear);

// 3
let jsCreator = "Brendan Eich";
alert(jsCreator);

// 4
let var1 = 10,
  var2 = 2;
alert(var1 + var2);
alert(var1 - var2);
alert(var1 * var2);
alert(var1 / var2);

// 5
let result = 2 ** 5;
alert(result);

// 6
a = 9;
b = 2;
alert(a % b);

// 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// 8
let age = prompt(`Сколько вам лет?`);
alert(age);

// 9.0
let user = {
  name: "Josh",
  age: 20,
  isAdmin: false,
};

// 9.1
user[`city of residence`] = "Tokyo";

// 9.2
user.age = 35;

// 9.3
delete user[`city of residence`];

// 9.4
let info = prompt(`Какую информацию хотите узнать о пользователе?`);
alert(user[info]);

// 10
let userName = prompt(`Как вас зовут?`);
alert(`Привет, ${userName}!`);
