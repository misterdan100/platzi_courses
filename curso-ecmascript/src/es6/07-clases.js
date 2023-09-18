class User{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad
    }

    saludar() {
        console.log(`mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }

    get uName() {
        return this.nombre;
    }
    
    set uName(n) {
        this.nombre = n; 
    }
};

const newUser = new User('daniel', 28);
console.log(newUser.uName);
console.log(newUser.uName = 'lucas');
console.log(newUser);