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
let array =document.getElementsByClassName('linkList');
for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    arrayElement.style.width='50%'
}

