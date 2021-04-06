// // -  Створити функцію конструктор для об'єкту який описує теги
//  function tags(titleOfTag, action, titleOfAttr, actionOfAttr){
//              this.titleOfTag = titleOfTag;
//              this.action = action;
//              this.attrs = [titleOfAttr, actionOfAttr];
// }
// let a = new tags('a', 'тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы', 'accesskey', 'Активация ссылки с помощью комбинации клавиш.');
// console.log(a)


// Створити класс  для об'єкту який описує теги
//     class Tags
// {
//     constructor(titleOfTag, action, titleOfAttr, actionOfAttr)
//     {
//         this.titleOfTag = titleOfTag,
//             this.action = action,
//             this.attrs = [titleOfAttr, actionOfAttr]
//     }
//
// }
// let a = new Tags('a', 'тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы', 'accesskey', 'Активация ссылки с помощью комбинации клавиш.');
// let div=new Tags('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента','Элемент <div> является блочным элементом и предназначен для выделения фрагмента','Задает выравнивание содержимого тега <div>.')
// let h1 = new Tags('h1','Заголовок первого уровня','align','Определяет выравнивание заголовка.')
// let span=new Tags('span','Тег <span> предназначен для определения строчных элементов документа. ','Для этого тега доступны универсальные атрибуты и события.',undefined)
// console.log(a)
// console.log(h1)
// console.log(div)
// console.log(span)

// Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// let Car = {
//     model: "Camry",
//     made: "Japan",
//     age: 2020,
//     maxSpeed: 350,
//     value: 3.5,
//
//
//     drive:function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     },
//
//     info:function () {
//         console.log(`
//          Модель:${this.model}
//          Виробник:${this.made}
//          Рік виготовлення:${this.age}
//          Максисальна швидкість:${this.maxSpeed}
//          Об'єм двигуна:${this.value}`)
//     },
//
//     increaseMaxSpeed:function (newSpeed) {
//         this.maxSpeed = newSpeed
//         console.log(`Максисальна швидкість ${this.model} підвищилась до ${this.maxSpeed}`)
//     },
//
//     changeYear:function (newValue) {
//         this.age = newValue
//         console.log(`Рік ${this.model} змінився до ${this.age}`)
//     },
//
//     addDriver:function (driver) {
//         this.driver = driver
//     }
//
// };
// Car.drive()
// Car.info()
// Car.increaseMaxSpeed(1222)
// Car.changeYear(2021)
// Car.addDriver({name:'Ostap',age:19,gender:'m'})
// console.log(Car)

// ______________________________________________________________________________________________________________________________________________________
//                                       РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________


// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, made, age, maxSpeed, value) {
//
//     this.model = model;
//     this.made = made;
//     this.age = age;
//     this.maxSpeed = maxSpeed;
//     this.value = value
//
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     this.info = function () {
//         console.log(`
//          Модель:${this.model}
//          Виробник:${this.made}
//          Рік виготовлення:${this.age}
//          Максисальна швидкість:${this.maxSpeed}
//          Об'єм двигуна:${this.value}`)
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed
//         console.log(`Максисальна швидкість ${this.model} підвищилась до ${this.maxSpeed}`)
//     }
//
//     this.changeYear = function (newValue) {
//         this.age = newValue
//         console.log(`Рік ${this.model} змінився до ${this.age}`)
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver
//
//
//     }
// }
//
// let Toyota = new Car('Camry', 'Japan', 2020, 350, 3.5)
// console.log(Toyota)
// Toyota.drive()
// Toyota.info()
// Toyota.increaseMaxSpeed(1222)
// Toyota.changeYear(2021)
// Toyota.addDriver({name:'Ostap',age:19,gender:'m'})
// console.log(Toyota)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// class Car {
//     constructor(model, made, age, maxSpeed, value) {
//         this.model = model;
//         this.made = made;
//         this.age = age;
//         this.maxSpeed = maxSpeed;
//         this.value = value
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info() {
//         console.log(`
//          Модель:${this.model}
//          Виробник:${this.made}
//          Рік виготовлення:${this.age}
//          Максисальна швидкість:${this.maxSpeed}
//          Об'єм двигуна:${this.value}`)
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed
//         console.log(`Максисальна швидкість ${this.model} підвищилась до ${this.maxSpeed}`)
//     }
//
//     changeYear (newValue){
//         this.age=newValue
//         console.log(`Рік ${this.model} змінився до ${this.age}`)
//     }
//
//     addDriver(driver){
//         this.driver=driver;
//     }
// }
// let Toyota = new Car('Camry', 'Japan', 2020, 350, 3.5)
// console.log(Toyota)
// Toyota.drive()
// Toyota.info()
// Toyota.increaseMaxSpeed(1222)
// Toyota.changeYear(2021)
// Toyota.addDriver({name:'Ostap',age:19,gender:'m'})
// console.log(Toyota)


// створити класс попелюшка з полями ім'я, вік, розмір ноги
// class Popelushka {
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }
// }
// class Prince {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
//
// }
//
//     let a1= new Popelushka('anya', 21, 36);
//     let a2= new Popelushka('tanya', 22, 38);
//     let a3= new Popelushka('ina', 23, 34);
//     let a4= new Popelushka('olya', 26, 39);
//     let a5= new Popelushka('asya', 25, 34);
//     let a6= new Popelushka('tosya', 26, 37);
//     let a7= new Popelushka('daya', 23, 38);
//     let a8= new Popelushka('ira', 22, 40);
//     let a9= new Popelushka('yulia', 21, 39);
//     let a10=new Popelushka('tolya', 45, 54);
//
// let b= new Prince('Jeck','34',37)
// let a=[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10]
//
// for (let i = 0; i < a.length; i++) {
//     if (a[i].shoesSize===b.footSize) {
//         console.log(a[i])
//     }
// }

// cтворити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// function Popelushka(name, age, shoesSize) {
//     this.name = name;
//     this.age = age;
//     this.shoesSize = shoesSize;
//
// }
//
// function Prince (name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// function result(){
//     for (let i = 0; i < a.length; i++) {
//     if (a[i].shoesSize===b.footSize) {
//         console.log(a[i])
//     }
// }
// }
// let a1= new Popelushka('anya', 21, 36);
// let a2= new Popelushka('tanya', 22, 38);
// let a3= new Popelushka('ina', 23, 34);
// let a4= new Popelushka('olya', 26, 39);
// let a5= new Popelushka('asya', 25, 34);
// let a6= new Popelushka('tosya', 26, 37);
// let a7= new Popelushka('daya', 23, 38);
// let a8= new Popelushka('ira', 22, 40);
// let a9= new Popelushka('yulia', 21, 39);
// let a10=new Popelushka('tolya', 45, 54);
//
// let b= new Prince('Jeck','34',37)
// let a=[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10]
// result()