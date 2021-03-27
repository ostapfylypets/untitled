// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
// let str1 = 'hello';
// let str2 = 'owu';
// let str3 = 'com';
// let str4 = 'ua';
// let num1 = 1;
// let num2 = 10;
// let num3 = -999;
// let num4 = 123;
// let num5 = 3.14;
// let num6 = 2.7;
// let num7 = 16;
// let boolean1 = true;
// let boolean2 = false;
// console.log(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, boolean1, boolean2);
// alert(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${boolean1} ${boolean2}`);
// document.write(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${boolean1} ${boolean2}<br>`);

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write// str1 = 'bye';
//  str2 = 'bye3';
// str3 = 'by2e';
// str4 = 'b1ye';
// num1 = 32;
// num2 = 110;
// num3 = -399;
// num4 = 1235;
// num5 = 3.123;
// num6 = 2.1;
// num7 = 11;
// boolean1 = false;
// boolean2 = true;
// console.log(str1, str2, str3, str4, num1, num2, num3, num4, num5, num6, num7, boolean1, boolean2);
// alert(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${boolean1} ${boolean2}`);
// document.write(`${str1} ${str2} ${str3} ${str4} ${num1} ${num2} ${num3} ${num4} ${num5} ${num6} ${num7} ${boolean1} ${boolean2}<br>`);

// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// const a = 2;
// const b = 3;
// const c = 4;
// const str5 = "abc";
// const str6 = 'abd';
// const str7 = 'acd';
// console.log(a, b, c, str5, str6, str7);
// alert(`${str5} ${str6} ${str7} ${a} ${b} ${c}`);
// document.write(`${str5} ${str6} ${str7} ${a} ${b} ${c}<br>`);

// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// let firstName = prompt();
// let lastName = prompt();
// let fatherName = prompt();
// console.log(firstName, lastName, fatherName)
// alert(`${firstName} ${lastName} ${fatherName}`)
// document.write(`${firstName} ${lastName} ${fatherName}`)
// person=firstName+lastName+fatherName;
// console.log(person);

// при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// let a=+prompt();
// let b=+prompt();
// let c=+prompt();
// console.log(a+b+c)

// при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let a=parseInt(prompt());
// let b=parseInt(prompt());
// let c=parseInt(prompt());
// let d=parseInt(prompt());
// let result=a+b+c+d;
// console.log(result);

// при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let a=parseFloat(prompt());
// let b=parseFloat(prompt());
// let c=parseFloat(prompt());
// let d=parseFloat(prompt());
// let result=a+b+c+d;
// console.log(result);

// при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// let a=Math.round(prompt());
// let b=Math.round(prompt());
// let c=Math.round(prompt());
// let result=a+b+c;
// console.log(result);

// при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
// let a=+prompt();
// let b=+prompt();
// let c=Math.pow(a,b);
// console.log(c);

// При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
// console.log(typeof(a),typeof(b),typeof(c),typeof(d))





// Практична
// Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
//  str='Привіт';
//     num=123;
//     flag=true;
//     txt='true';
//     console.log(typeof str);
//     console.log(typeof num);
//     console.log(typeof flag);
//     console.log(typeof txt);

// Создайте переменные a1, a2, a3, a4, a5.
//     При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//   let a1, a2, a3, a4, a5;
//     a1=5+3;
//     a2=5-3;
//     a3=5*3;
//     a4=5/3;
//     a5=5%3;
//     console.log(`${a1}\n ${a2}\n ${a3}\n ${a4}\n ${a5}`);

// Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:

// let a6,a7,a8,a9,a10;
// a6= 5 % 3;
// a7=3 % 5;
// a8=5 + '3';
// a9='5' - 3;
// a10=75 + 'кг';
// console.log(`${a6}\n ${a7}\n ${a8}\n ${a9}\n ${a10}`);

// Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
// let height=23;
// let width=10;
// let s=height*width;
// console.log(s);

// У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень)
// или оператор возведения в степень ** ).

// let n=3;
// let m=4;
// let k=Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
//  console.log(k);

// Напишите скрипт, который выводит "Hello world", создавши переменную
// str и выводить спомощью document.write, alert и console.log

// let str='Hello world';
// document.write('<h2>' + str +'</h2>');
// alert(str);
// console.log(str);

// Вывести в окно браузера при помощи метода alert() следующие данные:
// Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let lastname = prompt();
// let name = prompt();
// let surname = prompt();
// let age = prompt();
// let hobby = prompt();
// alert(`${lastname}<br> ${name}<br> ${surname}<br>${age}<br> ${hobby}`);

// Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
// Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
// Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
// Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'такой?'
// let concatenation = str1 + ' ' + str2 + ' ' + str3;
// document.write(concatenation);

// С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let a=+prompt();
// let b=+prompt();
// let c=+prompt();
// alert(a+b+c);

// С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let firstName=prompt();
// let lastname=prompt();
// let age=prompt();
// let str= `${'Доброго вечора'} ${firstName} ${lastname} ${", мої вітання що вам"} ${age} `
// alert(str)