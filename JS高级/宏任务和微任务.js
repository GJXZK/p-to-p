//宏任务和微任务

/*
    先执行微任务再执行宏任务  
    宏任务一个一个执行的  微任务全部执行
    常见的宏任务MacroTask有
    setTimeout()
    setInterval()
    requestAnimationFrame()
    postMessage()
    MessageChannel()

    常见的微任务MicroTask有

    Promise.then()
    Promise.catch()
    Promise.finally()
    MutationObsever()
*/
function test3() {
    console.log(1);  //总线

    setTimeout(function () {
        console.log(2);
        new Promise(function (resolve) {
            console.log(3);
            resolve();
        }).then(function () {
            console.log(4);
        });
        console.log(5);
    }, 1000);

    new Promise(function (resolve) {
        console.log(6);//总线
        resolve();
    }).then(function () {
        console.log(7);//微任务
        setTimeout(function () {
            console.log(8);//宏任务
        });
    });

    setTimeout(function () {
        console.log(9);
        new Promise(function (resolve) {
            console.log(10);
            resolve();
        }).then(function () {
            console.log(11);
        });
    }, 100);

    console.log(12);
}

test3();