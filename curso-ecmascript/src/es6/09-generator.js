function* iterate(array) {
    for ( let value of array ) {
        yield value;
    }
}

const it = iterate(['daniel', 'oscar', 'david', 'ana', 'ulices', 'jennifer']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next());
console.log(it.next());

function* iterador2() {
    while(true) {
        yield Date.now() * (Math.floor(Math.random() * 100))

    }
}

const nuevoNumero = iterador2();
console.log(nuevoNumero.next().value);
console.log(nuevoNumero.next().value);
console.log(nuevoNumero.next().value);
console.log(nuevoNumero.next().value);
console.log(nuevoNumero.next().value);
console.log(nuevoNumero.next().value);
console.log(nuevoNumero.next().value);
console.log(nuevoNumero.next().value);
console.log(nuevoNumero.next().value);
console.log(nuevoNumero.next().value);
console.log(nuevoNumero.next().value);