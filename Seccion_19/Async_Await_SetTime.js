//? async/await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}

// funcionConPromesaYAwait();


//? promesas, await, async y setTimeOut
async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa)
}

funcionConPromesaAwaitTimeout();