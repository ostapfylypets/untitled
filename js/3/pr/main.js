// змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// let array=document.getElementById('main_header');
// array.innerText='ostap';
// array.style.color='#813' ;

// робить шириниу елементу ul 400px
// let array =document.getElementsByTagName('ul');
// array[0].style.width='440px';
// console.log(array);
//

// робить шириниу всіх елементів з класом linkList шириною 50%
// let array =document.getElementsByClassName('linkList');
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     arrayElement.style.width='50%'
// }

// отримує текст який зберігається в елементі з класом listElement2
// let array =document.getElementsByClassName('listElement2');
// console.log(array[0].innerText);

// отримує всі елементи li та змінює ім колір фону на сірий
// let array =document.getElementsByTagName('ul');
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     arrayElement.style.backgroundColor='#112';
// }

// отримує всі елементи 'a' та додає їм клас anchor
// let array =document.getElementsByTagName('a');
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     arrayElement.classList.add('anchor');
// }

// отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let array =document.getElementsByTagName('a');
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (arrayElement.innerText==='link3'){
//         arrayElement.style.fontSize='40px';
//     }
//
// }

// отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let array = document.getElementsByTagName('a');
// for (let i = 0; i < array.length; i++) {
//     let arrayElement = array[i].innerText;
//     array[i].className = 'element_' + arrayElement
//
// }

// отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let array =document.getElementsByClassName('sub-header');
// for (let i = 0; i < array.length; i++) {
//    let arrayElements=array[i];
//     arrayElements.style.backgroundColor=prompt('color')
//
// }

// отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let array =document.getElementsByClassName('sub-header');
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (arrayElement.innerText==='content 2 segment'){
//         arrayElement.style.color=prompt('color');
//     }
//
// }

// отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let array =document.getElementsByClassName('content_1');
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     arrayElement.innerText=prompt('text');
// }

// отримати елементи p та змінити їм padding на 20px
// let array = document.getElementsByTagName('p');
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     arrayElement.style.padding='20px';
// }

// отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let array =document.getElementsByClassName('text2');
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     arrayElement.innerText='text';
//
// }

// Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
// const userDiv = document.createElement('div');
// document.body.appendChild(userDiv);
//
//
//     for (let j = 0; j < 8; j++) {
//         const rules1 = document.createElement('div');
//         rules1.innerHTML = `<h1>${rules[j].title} </h1><p>${rules[j].body}</p>`;
//         userDiv.appendChild(rules1);
//     }
//

// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let mass = [];
// for (let i = 0; i < 4; i++) {
//     citiesWithId[i].user_id = usersWithId[i].id;
//     usersWithId[i].address = citiesWithId[i];
//     if (usersWithId[i].id === citiesWithId[i].user_id) {
//         mass.push(usersWithId[i]);
//         mass.push(citiesWithId[i]);
//         }
// }
//console.log(mass);



