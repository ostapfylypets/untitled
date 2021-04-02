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