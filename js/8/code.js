// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let butt =document.createElement('button');
// let text =document.createElement('textarea');
// let div1 =document.createElement('div');
// document.body.appendChild(text);
// document.body.appendChild(div1);
// div1.appendChild(butt);
// butt.innerText='OK';
// butt.onclick=()=>{
//     localStorage.setItem('textkey',text.value)
// }
// text.innerText=localStorage.getItem('textkey')

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// let forma = document.forms.my;
// forma.oninput = () => {
//     let arr = {
//         name: forma.firstName.value,
//         secondName: forma.secondName.value,
//         gender: forma.gender[0].checked,
//         age: forma.age.value,
//         agree: forma.check1.checked };
//
//     localStorage.setItem('obj', JSON.stringify(arr))
//
// }
// let arrget = JSON.parse(localStorage.getItem('obj'))
// forma.firstName.value = arrget.name;
// forma.secondName.value = arrget.secondName;
// forma.gender[0].checked = arrget.gender;
// forma.gender[1].checked =! arrget.gender;
// forma.age.value = arrget.age;
// forma.check1.checked = arrget.agree;
// console.log(arrget);

// /Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let text = document.querySelector('#chek');
// let save = document.querySelector('#save');
// let next = document.querySelector('#next');
// let prev = document.querySelector('#previous');
// let arr = [];
// let i = arr.length - 1;
// save.onclick = () => {
//     next.style.display = 'block';
//     prev.style.display = 'block';
//     arr.push(text.value)
//     i = arr.length - 1
//     localStorage.setItem('arr', JSON.stringify(arr));
//     text.value='';
// }
// prev.onclick = () => {
//     let prevarr = JSON.parse(localStorage.getItem('arr'))
//     if (i > 0) {
//         i--;
//         text.value = prevarr[i]
//     } else if(i===0) {
//         i=arr.length-1
//         text.value = prevarr[i]
//
//     }
// }
// next.onclick = () => {
//     let nextarr = JSON.parse(localStorage.getItem('arr'))
//     if (i<arr.length-1){
//         i++;
//         text.value= nextarr[i];
//     }else if(i===arr.length-1){
//         i=0;
//         text.value= nextarr[i];
//     }
// }

//- Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let forma = document.forms.my;
let ul = document.createElement('ul')

forma.appendChild(ul)
let arr = [];
let i = 0
forma.save.onclick = () => {
    let obj = {
        fio: forma.fio.value,
        number: forma.number.value,
        mail: forma.mail.value,
        otdel: forma.otdel.value,
        age: forma.age.value,
    }
    arr.push(obj)
    console.log(arr);
    localStorage.setItem("arr", JSON.stringify(arr));
    let li = document.createElement('li')
    let delet =document.createElement("input")
    delet.type='button';
    delet.value='delete';
    delet.name=i;
    li.textContent = `user ${i+1}`;
    li.appendChild(delet);
    ul.appendChild(li);
    i++;
    delet.addEventListener("click",function (event){
event.target.parentElement.remove()
        arr.splice(event.target.name,1)
        localStorage.setItem("arr", JSON.stringify(arr));

    })
}

forma.red.onclick = () => {

}
