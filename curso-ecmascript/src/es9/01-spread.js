const user = {
    username: 'daniel',
    age: 34, 
    country: 'CO',
    datos: {gustos: 'piano', 
    music: { genero1: 'reggaeton', genero2: 'vallenato'}
}
};

const { username, ...values } = user;
console.log(username);
console.log(values);