const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
};
const usuario2 = {
    name: "Daniel",
    email: "daniel@correo.com",
    age: 24
};

const resumen = [usuario, usuario2]

const entries = Object.values(usuario);

console.log(entries);
console.log(Object.keys(usuario));
console.log(Object.values(usuario));

const nuevoArray = Object.assign(resumen);
console.log(nuevoArray);