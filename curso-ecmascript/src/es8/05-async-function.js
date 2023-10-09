const fnAsync = () => {
    return new Promise( ( resolve, reject ) => {
        (true)
            ? setTimeout( () => resolve('Async'), 2000)
            :  setTimeout( () => reject(new Error('Hubo un error!')), 2000)
    })
};

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn()
console.log('After');