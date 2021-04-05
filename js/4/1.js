// 1) створити функцію яка приймає масив та виводить його
// function  array(){
//     let mass=['osa','addasd',"adsda"];
//     console.log(mass)
// }
// array();

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function array(length) {
//     let mass=[];
//     for (let i = 0; i < length; i++) {
//         mass[i]=Math.floor(Math.random()*100);
//     }
//     console.log(mass);
// }
// array(10)

// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNumber(a,b,c){
//     if( a < b && a < c){
//         console.log(a)
//     }else if (b<c && b<a){
//         console.log(b);
//     }else if (c<a && c<b){
//         console.log(c)
//     }
// }
// minNumber(4,1,0)

// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNumber(a,b,c){
//     if (a>b&&a>c){
//         console.log(a)
//     }else if (b>c&&b>a){
//         console.log(b)
//     }else if (c>a&&c>b){
//         console.log(c);
//     }
// }
// maxNumber(1,2,6)

// створити функцію яка повертає найбільше число з масиву
// function maxNumber(mass = []) {
//     let max = 0;
//     for (let i = 0; i < mass.length; i++) {
//         const mass1 = mass[i];
//         if (mass1 > max){
//             max = mass1;
//         }
//     }
//     return max;
// }
// let number = maxNumber([1, 12, 34, 18, 91]);
// console.log(number);

// створити функцію яка повертає найменьше число з масиву
// function minNumber(mass=[]){
//     let min=0;
//     for (let i = 0; i < mass.length; i++) {
//         const mass1 = mass[i];
//         if (mass1<min){
//             min=mass1
//         }
//     }
//     return min;
// }
// let number=minNumber([1,15,-99,-1,-34])
// console.log(number)

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sum(mass=[1,2,6,7,8]){
//     let a=0
//     for (let i = 0; i < mass.length; i++) {
//           a += mass[i];
//     }
//     console.log(a);
// }
// sum();

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function ser(mass=[1,2,6,7,8]){
//     let a=0
//     for (let i = 0; i < mass.length; i++) {
//           a+= mass[i];
//     }
//     a/=mass.length
//     console.log(a);
// }
// ser();

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// function arrayObj(array) {
//     const arr2 = [];
//     for (let item of array) {
//         for (let key in item) {
//             arr2.push(key);
//         }
//         console.log(arr2);
//     }
//     return arr2;
// }
// arrayObj([{name: 'Dima', age: 13}, {model: 'Camry'}]);

// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// function arrayObj(array) {
//     const arr = [];
//     for (let item of array) {
//         for (let key in item) {
//             arr.push(item[key]);
//         }
//         console.log(arr);
//     }
// }
// arrayObj([{name: 'Dima', age: 13}, {model: 'Camry'}]);

// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function sum(mas,mas1){
//     let arr=[];
//     for (let i = 0; i < mas.length; i++) {
//         arr.push(mas[i]+mas1[i]);
//     }
//     return arr
// }
// let array=sum([1,2,3,4],[2,3,4,5]);
// console.log(array);

// ===========================================================================================

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function number(){
//     console.log(arguments)
//     let min=arguments[0];
//     let max=arguments[0];
// for(let argument of arguments){
//     if (min>=argument) min=argument;
//     if (max<=argument) max=argument;
// }
// console.log(min);
// return max;
// }
// let num=number(41,23,16,-233,124);
// console.log(num)

// Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// function arObj(array) {
//     const arr2 = [];
//     let keyOfarray=prompt();
//     if (keyOfarray === 'key') {
//         for (let item of array) {
//             for (let key in item) {
//                 arr2.push(key);
//             }
//         }
//         return arr2
//     }
//     else if (keyOfarray === 'array') {
//         const arr2 = [];
//         for (let item of array) {
//             for (let key in item) {
//                 arr2.push(item[key])
//             }
//         }
//         return arr2;
//     }
// }
// let a=arObj([{name: 'Dima', age: 13}, {car: 'Toyota',model: 'Camry'}])
// console.log(a)

// Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// function first(array, i) {
//     let a = array.splice(i, 1);
//     for (const aElement of a) {
//         array.splice(i + 1, 0, aElement);
//     }
//     return array
// }
//
// let a = first(['eat', 'min', 'more', 'drink'],0)
// console.log(a);

// Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.*/
//  Зберігаючи при цьому порядок не нульових значень.
//  Двожина масиву від 2 до 100
// function array(mass=[arguments]){
//     for (let i = 100; i >=0; i--) {
//         if(mass[i]===0){
//             mass.splice(i,1)
//             mass.push(0);
//         }
//     }
//     return mass;
// }
// console.log(array([100,12,16,0,19,0,22]));

// Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// console.log((n1.trim()).replaceAll('  ',''))
// console.log((n2.trim()).replaceAll('  ',''))
// console.log((n3.trim()).replaceAll('  ',''))

// Додає в боді блок з текстом "Hello owu"
// function hello(text){
//     let a=document.createElement('div');
//     a.innerHTML=text;
//     document.body.appendChild(a);
//     console.log(a);
// }
// hello('Hello owu')

// Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function hello(type,text){
//     let a=document.createElement(type);
//     document.body.appendChild(a);
//     a.innerHTML=text;
//     console.log(a);
// }
// hello('h1','Hello owu')

