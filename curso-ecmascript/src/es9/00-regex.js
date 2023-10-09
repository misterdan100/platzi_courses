const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const matchers = regex.exec('2022-01-01');
console.table(matchers);
console.log(matchers);