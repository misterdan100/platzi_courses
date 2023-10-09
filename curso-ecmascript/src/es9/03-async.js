async function* anotherGenerator() {
    yield Promise.resolve(1);
    yield Promise.resolve(2);
    yield Promise.resolve(3);
}

const other = anotherGenerator();

other.next().then( response => console.log(response))
other.next().then( response => console.log(response))
other.next().then( response => console.log(response))
other.next().then( response => console.log(response))