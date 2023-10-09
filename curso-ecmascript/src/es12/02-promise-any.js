const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.reject("Ups promesa 2 falló")
const promesa3 = Promise.resolve(() => {console.log("Promesa 3")})


Promise.any([promesa1, promesa2, promesa3])
    .then(respuesta => respuesta) 
    .catch(error => console.log(error))