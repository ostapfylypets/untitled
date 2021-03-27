// -створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// let num=[1,2,3,4,5];
// let str=['abc','zxc','qwe','onp','ikj'];
// let arr=[1,undefined,'ost',true,null];
// console.log(num);
// console.log(str);
// console.log(arr);

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let arr=[];
// arr=1;
// console.log(arr);
// for (let i = 0; i < 10; i++) {
//     document.write  (<div>lorem ${i}</div>);
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<20) {
//     document.write(<h1>item</h1>);
// i++;
// }

//let i=0;
// while (i<20) {
//     document.write(<h1>item ${i}</h1>);
// i++;
// }

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array=[1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < array.length; i++) {
//     console.log  (array[i]);
// }

// let array=['ost','full','rouy','adfas','afdsf'];
// for (let i = 0; i < array.length; i++) {
//     console.log  (array[i]);
// }

// let array=[1,2,3,'ost','full','rouy','adfas','afdsf',true,null];
// for (let i = 0; i < array.length; i++) {
//     console.log  (array[i]);
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array=[1,2,3,'ost',false,'rouy','adfas','afdsf',true,null];
// for (let i=0;i <array.length;i++ ){
// if (typeof(array[i])=="boolean") {
//     console.log(array[i])
// }
// }

// let array=[1,2,3,'ost',false,'rouy','adfas','afdsf',true,null];
// for (let i=0;i <array.length;i++ ){
// if (typeof(array[i])=="number") {
//     console.log(array[i])
// }
// }

// let array=[1,2,3,'ost',false,'rouy','adfas','afdsf',true,null];
// for (let i=0;i <array.length;i++ ){
// if (typeof(array[i])=="string") {
//     console.log(array[i])
// }}

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//     let array=[];
//     let array2=[1,2,3,'ost',false,'rouy','adfas','afdsf',true,null]
//     for(let i=0;i<10;i++){
//         array.push(array2[i])

//         }
// console.log(array);

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i=0;i<100;i++){
// if(i%2==0){
//     document.write(i)
//     console.log(i)
// }
// }

// for(let i=0;i<100;i++){
//     if(i%2!=0){
//         console.log(i)
//         document.write(i+' ')
//     }
//     }

// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for(let i=0;i<2;i++){
//     for(let j=0;j<60;j++){
//         console.log(${i} min : ${j} sec)
//     }
// }


// for(let i=0;i<2;i++){
//         for(let j=0;j<60;j++){
//             for(let k=0;k<60;k++)
//             console.log(${i} hour :  ${j} min : ${k} sec)
//         }
//     }

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let array = ['a', 'b', 'c'];
// let str = '';
// for (let i = 0; i < array.length; i++) {
// str += array[i]
// }
// console.log(str)

// let i=0
// let array = ['a', 'b', 'c'];
// let str = '';
// while (i<array.length) {
//     str += array[i];
//     i=i+1
// }
// console.log(str);

// let array = ['a', 'b', 'c'];
// let str = '';
// for (let i  of array){
//     str += i;
// }
// console.log(str);


//Class


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array1 = [1, 2, 3];
// console.log('array1:', array1);
// let reversed = array1.reverse();
// console.log('reversed:', reversed);
// console.log('array1:', array1);

// Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array1 = [1, 2, 3];
// console.log('array1:', array1);
// let array2 = array1.push(4,5,6);
// console.log('array1:', array1);

// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let array1 = [1, 2, 3];
// console.log('array1:', array1);
// let array2 = array1.unshift(4,5,6);
// console.log('array1:', array1);

// Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let array=['js', 'css', 'jq'];
// array[1]=[]
// array.shift();
// console.log(array)

// let array=['js', 'css', 'jq'];
// array[1]=[]
// array.pop();
// console.log(array)

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let array=[1, 2, 3, 4, 5];
// console.log(array.slice(3))

// let array=[1, 2, 3, 4, 5];
// console.log(array.slice(0,2))


// let array=[1, 2, 3, 4, 5];
// console.log(array.slice(0,1) +','+ array.slice(3));

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let array=[1, 2, 3, 4, 5];
// array.splice(3,0,'a', 'b', 'c');
// console.log(array);

// let array=[1, 2, 3, 4, 5];
// array.splice(1,0,'a', 'b');
// array.splice(6,0,'c');
// console.log(array);

// let array=[1, 2, 3, 4, 5];
// array.splice(1,0,'a', 'b');
// array.splice(6,0,'c');
// array.splice(8,0,'e');
// console.log(array);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array=[2,17,13,6,22,31,45,66,100,-18];
// let result = array.filter(function(elem) {
//   return elem % 2 == 0;
// });
// console.log(result);

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let array=[2,17,13,6,22,31,45,66,100,-18];
// let pusher=[];
// for (let i = 0; i <array.length ; i++) {
//     pusher.push(array[i])
// }
// console.log(pusher)

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let array=[2,17,13,6,22,31,45,66,100,-18];
// let pusher=[];
// for (let i = 0; i <array.length ; i++) {
//     pusher=array}
// console.log(pusher)