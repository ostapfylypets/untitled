// Створити масив з 20 чисел та:
let a=[1,2,3,4,5,6,81,123,44,-32,122,12,13,14,15,16,17,18,19,20,21,22];
// відсортувати його від меншого до більшого
// let a1=a.sort((a,b)=>a-b)
// console.log(a1)

// відсортувати його від більшого до меншого.
// let a1=a.sort((a,b)=>b-a)
// console.log(a1)

// Відфілтрувати числа які є кратними 3.
// let a1=a.filter((val)=>val % 3 === 0)
// console.log(a1)

// Відфілтрувати числа які є більшими за 10.
// let a1=a.filter((value )=> value>10)
// console.log(a1)

// Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// a.forEach((value) =>console.log(value))

// За допомогою map збільшити кожен елемент в масиві в три рази.
// let map=a.map((value) =>value*3 );
// console.log(map)

// Порахувати загальну суму всіх елментів у масиві (reduce)
// let reduce=a.reduce((acc, currentValue) => acc+currentValue );
// console.log(reduce);


// Створити масив з 20 стрічок та:
let str=['andriy','ostap','danya','fill','tanya','nastya','olya','nazar','max','oksana','igor','anna','sergiy','oleg','dimas','nazar',]

// Відсортувати його в алфавітному порядку
// let str1=str.sort();
// console.log(str1);

// Відсортувати в зворотньому порядку
// let str1=str.sort((a,b)=>a<b?1:-1);
// console.log(str1);

// Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let str1=str.filter((val)=>val.length>4)
// console.log(str1);

// Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let map=str.map((value )=>`sam says ${value}` );
// console.log(map)

// Все робити тільки за допомогою методів масивів!
//     Дано масив :
    const users = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}]
// відсортувати його за  віком (зростання , а потім окремо спадання)
// let sort=users.sort((a, b) => a.age-b.age);
// console.log(sort);

// let sort=users.sort((a, b) => b.age-a.age);
// console.log(sort);

// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sorts=users.sort((a,b)=>a.name.length-b.name.length);
// console.log(sorts);

// let sorts=users.sort((a,b)=>b.name.length-a.name.length);
// console.log(sorts);

// пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)
let JClone = JSON.stringify(users) ;
let UClone = JSON.parse(JClone);
UClone.map((value, index) => value.id=index+1);
// console.log(UClone);

// відсортувати його за індентифікатором
// let sorts=UClone.sort((a,b)=>a.id-b.id);
// let sorts=UClone.sort((a,b)=>b.id-a.id);
// console.log(sorts);

// Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let array=[];
// let reduce=UClone.reduce((a,b)=>{
//     if(a.isMarried===true){
//         array.push(a);
//     }
//     return b;
// })
// console.log(array);

// ______________________________________________________________________________________________________________________________________________________
//                     РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
// двигун більше 3х літрів
// let vol=cars.filter((value )=>value.volume>3 );
// console.log(vol);

// двигун = 2л
// let vol=cars.filter((value )=>value.volume===2 );
// console.log(vol);

// виробник мерс
// let produce=cars.filter((value)=>value.producer==='mercedes');
// console.log(produce);

// двигун більше 3х літрів + виробник мерседес
// let vol=cars.filter((value )=>(value.volume>3)&&(value.producer==='mercedes') );
// console.log(vol);

// двигун більше 3х літрів + виробник субару
// let vol=cars.filter((value )=>(value.volume=>3)&&(value.producer==='subaru') );
// console.log(vol);

// сили більше ніж 300
// let pow=cars.filter((value) =>value.power>300 );
// console.log(pow);

// сили більше ніж 300 + виробник субару
// let pow=cars.filter((value) =>(value.power>300 )&&(value.producer==='subaru'));
// console.log(pow);

// мотор серіі ej
// let enj=cars.filter((value )=> value.engine.startsWith('ej'));
// console.log(enj);

// сили більше ніж 300 + виробник субару + мотор серіі ej
// let filt=cars.filter((value )=>(value.power>300)&&(value.engine.startsWith('ej'))&&(value.producer==='subaru'));
// console.log(filt);

// двигун меньше 3х літрів + виробник мерседес
// let mers=cars.filter((value)=>(value.volume<3)&&(value.producer==='mercedes'));
// console.log(mers);

// двигун більше 2л + сили більше 250
// let power250=cars.filter((value) =>(value.volume>2)&&(value.power>250));
// console.log(power250);

// сили більше 250  + виробник бмв
// let power250=cars.filter((value) =>(value.producer==='bmw')&&(value.power>250));
// console.log(power250);

const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Відсортувати їх по ID
// let sort=usersWithAddress.sort((a,b)=>a.id-b.id);
// console.log(sort);

// Відсортувати їх по ID в зворотньому порядку
// let sort=usersWithAddress.sort((a,b)=>b.id-a.id);
// console.log(sort);

// Відсортувати по віку
// let sort=usersWithAddress.sort((a,b)=>a.age-b.age);
// console.log(sort);

// Відсортувати по віку в зворотньому порядку
// let sort=usersWithAddress.sort((a,b)=>b.age-a.age);
// console.log(sort);

// Відсорутвати по імені
// let sort=usersWithAddress.sort((a, b) => a.name>b.name?1:-1);
// console.log(sort);

// Відсорутвати по назві вулиці
// let sort=usersWithAddress.sort((a, b) => a.address.street>b.address.street?1:-1);
// console.log(sort);

// Відсорутвати по номеру будинку
// let sort=usersWithAddress.sort((a, b) => a.address.number-b.address.number);
// console.log(sort);


// Залигити тільки тих, хто молодший ніж 30 (filter)
// let filt=usersWithAddress.filter((value )=>value.age<30 );
// console.log(filt);

// Залишити тільки одружених
// let filt=usersWithAddress.filter((value )=>value.isMarried===true );
// console.log(filt);

// Залишити тільки одружених, які молодні за 30
// let filt=usersWithAddress.filter((value )=>(value.isMarried===true)&(value.age<30));
// console.log(filt);

// Залишити лише тих, в кого парні номери будинків.
// let filt=usersWithAddress.filter((value )=>value.address.number%2===0);
// console.log(filt);

// Порахувати загальний вік всіх людей. (reduce)
// let reduce=usersWithAddress.reduce((acc, currentValue) =>{return acc+currentValue.age;},0);
// console.log(reduce);

// Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// let newClone=JSON.stringify(usersWithAddress);
// let newUser=JSON.parse(newClone);
// let array=[];
// let reduce=newUser.reduce((a,b)=> {
//     if ((a.isMarried === true )&&(a.age>=30)) {
//         a.child = true;
//         array.push(a)
//     }
//     return b;
// })
// console.log(array);

