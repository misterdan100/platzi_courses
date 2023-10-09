const anotherFunction = () => {
    return new Promise( (resolve, reject) => {
        if(false) {
            resolve('Hey!!');
        } else {
            reject('Whooops!');
        }
    } )
}

anotherFunction()
    .then( response => console.log(response))
    .catch( reject => console.log(reject) )
    .finally( () => console.log('Promise Finnaled') )