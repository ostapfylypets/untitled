// function wakeUp(time, cb) {
//     setTimeout(() => {
//         if (time < 100) {
//             console.log('Я проснувся');
//             cb(null, time += 200);
//             return;
//         } else {
//             cb('Поспи ще')
//         }
//     }, 1000)
// }
//
// function getUp(time, cb) {
//     setTimeout(() => {
//         if (time < 300) {
//             console.log('Я встав');
//             cb(null, time += 100);
//             return;
//         } else {
//             cb('Тобі портібно ще полежати')
//         }
//     }, 1000)
// }
//
// function drinkCoffe(time, cb) {
//     setTimeout(() => {
//         if (time < 500) {
//             console.log('Випив каву');
//             cb(null, time += 100);
//             return;
//         } else {
//             cb('Ще, пю')
//         }
//     }, 1000)
// }
//
// function goWork(money, cb) {
//     setTimeout(() => {
//         if (money===0) {
//             console.log('я закінчив роботу')
//             money=300
//             cb(null,money);
//             return;
//         }
//         cb('Мені потрібно ще попрацювати');
//     }, 3000)
// }
//
// function goEat(money, cb) {
//     setTimeout(() => {
//         if (money > 100) {
//             console.log('Om nom nom');
//             cb(null);
//         } else {
//             cb('Cьогодні я не поїм');
//         }
//     }, 1500)
// }
//
// function goHome(isHome, cb) {
//     setTimeout(() => {
//         if (isHome) {
//             console.log('Їду до домцю!')
//             cb(null);
//         } else {
//             cb('Я ще посиджу');
//         }
//     }, 1000)
// }
//
// function sleep(isTired) {
//     setTimeout(() => {
//         if (isTired) {
//             console.log('Накінець то сон');
//         } else {
//             console.log('Я поіграю в дотку!')
//         }
//     },1000)
// }
//
//
//
// wakeUp(0, (err, date) => {
//     if (!err) {
//         getUp(date, (err, date) => {
//             if (!err) {
//                 drinkCoffe(date, (err, date) => {
//                     if (!err) {
//
//                         goWork(0,(err)=>{
//                             if (!err) {
//
//                                 goEat(300,(err)=>{
//                                     if (!err){
//                                         goHome(true,(err)=>{
//                                             if (!err){
//                                                 sleep(true)
//                                             }else {
//                                                 console.error(err)} })
//                                     }else {
//                                         console.error(err)} })
//                             }else {
//                                 console.error(err)} })
//                     } else {
//                         console.error(err)
//                     }
//                 })
//             } else {
//                 console.error(err)
//             }
//         })
//     } else {
//         console.error(err)
//     }
// })


// Promise  and async
function wakeUp(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 100) {
                console.log('Я проснувся');
                resolve(time += 200);
                return;
            } else {
                reject('Поспи ще')
            }
        }, 1000)
    })
}

function getUp(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 300) {
                console.log('Я встав');
                resolve(time += 100);
                return;
            } else {
                reject('Тобі портібно ще полежати')
            }
        }, 1000)
    })
}

function drinkCoffe(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 500) {
                console.log('Випив каву');
                resolve(time += 100);
                return;
            } else {
                reject('Ще, пю')
            }
        }, 1000)
    })
}

function goWork(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 100) {
                console.log('я закінчив роботу')
                money = 300
                resolve(money);
                return;
            }
            reject('Мені потрібно ще попрацювати');
        }, 3000)
    })
}

function goEat(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 100) {
                console.log('Om nom nom');
                resolve(null);
            } else {
                reject('Cьогодні я не поїм');
            }
        }, 1500)
    })
}

function goHome(isHome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isHome) {
                console.log('Їду до домцю!')
                resolve(null);
            } else {
                reject('Я ще посиджу');
            }
        }, 1000)

    })
}

function sleep(isTired) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isTired) {
                console.log('Накінець то сон');
            } else {
                console.log('Я поіграю в дотку!')
            }
        }, 1000)
    })
}

//
// wakeUp(0)
//     .then(value => {
//         return getUp(value);
//     })
//     .then((value)=>{
//         return drinkCoffe(value)
//     })
//     .then(() => {
//         return goWork(0);
//     })
//     .then((money) => {
//         return goEat(money);
//     })
//     .then(() => {
//         return goHome(true);
//     })
//     .then(() => {
//         return sleep(true);
//     })
//     .catch((err) => {
//         console.error(err);
//     })

// Async await
async function showmyDay() {
    try {
        let time = await wakeUp(0);
        await getUp(time);
        await drinkCoffe(time);
        let money = await goWork(0);
        await goEat(money);
        await goHome(true);
        await sleep(true);
    } catch (err) {
        console.error('eror')
    }
    finally {
        console.log("Finnaly Promise async await")
    }
}
showmyDay()