// alert("Hello World!");
// console.log("Hello World");

// console.log("HELLO WORLD!");
// let example = "HELLO WROLD!2";
// const example2 = "HELLO WORLD!3";
// console.log(example, example2);
// console.log(example2);
// let name = "Aidin";
// console.log(name);
// const name = "aidin";
// name = "makers  ";
// console.log(name);

// TODO:----------STRING-----------------строка 1
// let str = "Hello World!";
// let str1 = "Hello";
// let str2 = "5";
// console.log(str, str1, str2);

//TODO:------------NUMBER-----------------число 2
// let num = "45";
// let num1 = "78";
// let ne = (num2 = "100");
// console.log(num, num1, num2);

//TODO:------------BOOLEAN----------------логика 3
// let bool = true; //!YES//
// let bool2 = false; //!No//
// console.log(bool, bool2);

// console.log(Boolean(0));

//TODO:-------------UNDEFINED-------------- не специальная пустота 4
// let a;
// console.log(a);

//TODO:-----------NULL-------------------- специальная пустота 5
// let b=null;
// console.log(b);

//TODO:-------------OBJECT---------------- объект 6
// let obj = {
//   name: "Aidin",
//   age: "16",
//   Hobby: "Basketball",
//   dog: {
//     name: "Rembo",
//     color: "Black-white",
//   },
// };
// console.log(obj);
// console.log(obj.name);
// console.log(obj.dog.name);

//TODO:-----ARRAY------- Mассив,тоже Объект
// let arr = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   true,
//   false,
//   undefined,
//   null,
//   "hello",
//   { name: "Aidin" },
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// ];
// console.log(arr);
// console.log(arr[4]);
// console.log(arr[6]);
// console.log(arr[2][7]);
// console.log(arr.length);
// console.log(arr.length - 1);

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("ENter second number");
// let add = num1 + num2;
// let sub = num1 - num2;
// let mul = num1 / num2;
// let div = num1 * num2;
// // console.log(add, sub, mul, div);
// alert(add);
// alert(sub);
// alert(mul);
// alert(div);
// alert(`${num1 + num2},${num1 - num2},${num1 * num2},${num1 / num2}`);

// console.log(typeof add);

//TODO:-------------------------symbol----------------------- символ
// let id = Symbol("r567u");

//TODO:-----------------------BIGint-----------------------------Большое число
// let int=3252362623n;

//TODO:-------------------Math operators-------------------------------
// console.log(1 + 5);
// console.log(1 - 5);
// console.log(1 / 5);
// console.log(1 * 5);
// console.log(2 ** 3);
// console.log(10 % 7);
//TODO: ----слияние-------------
// console.log("10" * "5");
// console.log("10" + 2);

//TODO: true-false значение------------------
// console.log(Boolean(0)); //!false
// console.log(Boolean(1)); //true
// console.log(Boolean(null));//!false
// console.log(Boolean(undefined));//!false
// console.log(Boolean("qwerty"));//true
// console.log(Boolean(""));//!false

//TODO: --------------сравнение-------------\
//! здесь все должно быть равно все!--------
//строгое//
// ===
// console.log(3 === 5); //!false
// console.log(3 === 3); //true
// console.log(3 === "3"); //!false
// console.log(3 < 5); //true
// console.log(3 > 5); //!false
// console.log(4 >= 4); //true
// console.log(4 <= 4); //true
// console.log(3 !== 5);//true
//!здесь не обязательно---------------
//нестрогое//
// ==
// console.log(3 == 3); //true
// console.log("3" == 3); //true
// console.log("3" != 3); //!false

//TODO: из String в Number-------------
// let nun = "1235";
// console.log(+nun);

//TODO:----------parseInt---- cannot read after "ponit"
// let num = "1232432436565";
// console.log(parseInt(num));

//TODO:----------parseFloat---- can read "points"
// let num = 3242.3423432;
// console.log(parseFloat(num));

//TODO:--------------Number------------
// let nun = "23525447";
// console.log(Number(nun));

//TODO:--------------From "number" to "string"
// let num = 2343243;
// console.log(typeof num.toString());
// console.log(String(num));
// console.log(num);

//TODO:-------------alert,promt,confirm------------
// alert("Hello world!"); ------вывод на экран------
// prompt("What is your name?");//input-----
// let name = prompt("What is your name?");
// console.log(name);
// alert(` Welcome!   ${name}`);
// let value = confirm("Are you asshole?");
// console.log(value);

//TODO:--------------mini calculator----------
// let num1 = prompt("Enter First number!");
// let operator = prompt("Choose math operator!");
// let num2 = prompt("Enter Second number!");
// let result = eval(num1 + operator + num2); //2+2//
// alert(result);
