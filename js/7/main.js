//Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
//     const textElement = document.getElementById('text');
//     textElement.onclick = (()=> {
//         textElement.hidden=true;
//     });

//-Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// const tagElement = document.getElementsByTagName('button');
//     tagElement[0].onclick = (()=> {
//         tagElement[0].hidden=true;
//     });


//-Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// const tagElement = document.getElementsByTagName('input');
// tagElement[1].onclick=(()=>{
//     if (tagElement[0].value<18){
//         alert("sorry go to watch cartoons")
//     }
//     tagElement[0].value=null
// })


//-Створіть меню, яке розгортається/згортається при клику
// let menu=document.getElementsByClassName('menu');
//   menu[1].onclick=(()=>{
//       if (menu[0].hidden===false){
//         menu[0].hidden=true
//       }else {menu[0].hidden=false}
//   })


//-Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let commentList = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}]
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// for (let i = 0; i < commentList.length; i++) {
//     let content = document.querySelector('#content');
//     let commentDiv = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     let commentBut = document.createElement('button');
//     content.appendChild(commentDiv);
//     commentDiv.appendChild(h1);
//     commentDiv.appendChild(p);
//     commentDiv.appendChild(commentBut);
//     commentBut.innerText=`hide me`;
//     h1.innerHTML = `${commentList[i].title}`;
//     p.innerHTML = `${commentList[i].body}`;
//
//     commentBut.onclick=()=>{
//         if (p.hidden===false){
//             p.hidden=true
//       }else p.hidden=false}
// }


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let btn=document.getElementById('btn');
// btn.onclick=()=>{
//     const myForms=document.forms
//     for (let item of myForms) {
//         for (let item_value of item) {
//             console.log(item_value.value)
//         }
//
//     }
// }


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.


// let tab1=document.getElementById('tab1');
// function table(str,column,root){
//     const idTable =document.getElementById(root);
//     const tab=document.createElement('table')
//     for (let i = 0; i < str; i++) {
//         const str1 = document.createElement('tr')
//         for (let i = 0; i < column; i++) {
//             const column1 = document.createElement('td')
//             column1.innerText = `123`
//             column1.style.border='1px solid blue'
//             str1.appendChild(column1)
//             tab.appendChild(str1)
//             idTable.appendChild(tab)
//         }}
// tab.style.backgroundColor='#1234';
// }
// table(6,7,'tab1')


// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
// let photo=[
//     {image:'image/download.jpg'},
//     {image:'image/eceb8ca1-045e-4aab-81f6-4dcc10445731.jpg'},
//     {image:'image/Eren_Jaeger_(Anime)_character_image_(850).png'}
// ]
// let cont = document.getElementById('cont');
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let img = document.createElement('img');
// cont.appendChild(img);
// img.style.width = '200px';
// img.style.height = '200px';
// img.src = photo[0].image;
// let currentIndex = 0;
// btn1.onclick=()=>{
//     currentIndex - 1 < 0 ?
//         currentIndex = photo.length - 1 :
//         currentIndex = currentIndex - 1;
//     img.src = photo[currentIndex].image;
// }
// btn2.onclick=()=>{
//     currentIndex + 1 > photo.length - 1 ?
//         currentIndex = 0 :
//         currentIndex = currentIndex + 1;
//     img.src = photo[currentIndex].image;
// }


// // ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________


// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badwords =['js','angular','css','html']
// let bad=document.getElementsByClassName('badword');
// let input=document.createElement('input');
// let btn=document.createElement('button')
// document.body.appendChild(input);
// document.body.appendChild(btn);
// btn.innerText='go!'
// btn.onclick=()=>{
// for (let i = 0; i < badwords.length; i++) {
// if (input.value===badwords[i]){
//     alert('no!no!nooooooooooooooooo!')
// }
// }}


// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let badwords =['js','angular','css','html']
// let bad=document.getElementsByClassName('badword');
// let input=document.createElement('input');
// let btn=document.createElement('button')
// document.body.appendChild(input);
// document.body.appendChild(btn);
// btn.innerText='go!'
// btn.onclick=()=>{
//     for (let i = 0; i < badwords.length; i++) {
//         if (input.value.includes(badwords[i])){
//             alert('no!no!nooooooooooooooooo!')
//         }
//
//     }}

// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// ???????????????


// -- Взяти масив юзерів
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
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
    let  btn1=document.getElementById('status');
    let  btn2=document.getElementById('age');
    let  btn3=document.getElementById('city')
    let divka=document.getElementById('divka')
let array=JSON.parse(JSON.stringify(usersWithAddress));

btn1.onclick=()=>{
    if (btn1.checked)
        array=array.filter(value=>value.isMarried===false);
    let string=JSON.stringify(array);
    divka.innerHTML=string;
}
btn2.onclick=()=>{
    if (btn2.checked)
        array=array.filter(value=>value.age>29);
    let string=JSON.stringify(array);
    divka.innerHTML=string;
}
btn3.onclick=()=>{
    if (btn3.checked)
        array=array.filter(value=>value.address.city==='Kyiv');
    let string=JSON.stringify(array);
    divka.innerHTML=string;
}