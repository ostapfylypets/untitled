// отримує текст з параграфа з id "content"
// let array=document.getElementById("content");
// console.log(array.innerText);

// отримує текст з блоку з id "rules"
// let array=document.getElementById("rules");
// console.log(array.innerText);

// замініть текст параграфа з id 'content' на будь-який інший
// let array=document.getElementById("content");
// array.innerText='ostap21';
// console.log(array.innerText);

// замініть текст параграфа з id 'rules' на будь-який інший
// let array=document.getElementById("rules");
// array.innerHTML='<h1>ostap21</h1>';

// змініть кожному елементу колір фону на червоний
// let array=document.getElementsByTagName("body");
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     arrayElement.style.backgroundColor='#f60228';
// }

// змініть кожному елементу колір тексту на синій
// let array=document.getElementsByTagName("body");
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     arrayElement.style.color='#2f19b1';
// }

// отримати весь список класів елемента з id=rules і вивести їх в console.log
// let array=document.getElementById("rules");
// console.log(array.classList)

// отримати всі елементи з класом fc_rules
// let array=document.getElementsByClassName("fc_rules");
// console.log(array)

// поміняти колір тексту у всіх елементів fc_rules на червоний
// let array=document.getElementsByClassName("fc_rules");
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     arrayElement.style.color='#3a53ba';
// }

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];


// for (let i = 0; i < users.length; i++) {
//     const userDiv = document.createElement('div');
//     userDiv.innerHTML=`hello my name ${users[i].name}<br>
// my age ${users[i].age}
// `;
//     userDiv.style.backgroundColor='red';
//     userDiv.style.margin='15px';
//     document.body.appendChild(userDiv);
// }

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості

//
// for (let i = 0; i < users.length; i++) {
//     const userName = document.createElement('div');
//     userName.innerHTML = `hello my name ${users[i].name}<br>
// my age ${users[i].age}
// `;
//
//     userName.style.backgroundColor = 'purple';
//     userName.style.margin = '15px';
//     document.body.appendChild(userName);
//
//     const userDiv = document.createElement('div');
//       userName.appendChild(userDiv);
//
//     for (let j = 0; j < 1; j++) {
//         const userCity = document.createElement('div');
//         userCity.innerHTML = `my city ${users[i].address.city}`;
//         userCity.style.backgroundColor = 'red';
//        userDiv.appendChild(userCity);
//     }
//     for (let K = 0; K < 1; K++) {
//         const userCountry = document.createElement('div');
//         userCountry.innerHTML = `my country ${users[i].address.country}`;
//         userCountry.style.backgroundColor = 'blue';
//         userDiv.appendChild(userCountry);
//
//     }
//     for (let n = 0; n < 1; n++) {
//         const userStreet = document.createElement('div');
//         userStreet.innerHTML = `my country ${users[i].address.street}`;
//         userStreet.style.backgroundColor = 'yellow';
//         userDiv.appendChild(userStreet);
//
//     }
//     for (let m = 0; m < 1; m++) {
//         const userNumber = document.createElement('div');
//         userNumber.innerHTML = ` my house number ${users[i].address.houseNumber}`;
//         userNumber.style.backgroundColor = 'pink';
//         userDiv.appendChild(userNumber);
//
//     }
// }
//
