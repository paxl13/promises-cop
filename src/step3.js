const faker = require('faker');
/* 
- Promisify step1
*/


function connectToADb(db) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(db), 1000);
  });
}

function getData(key, db) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(faker.lorem.word()), 1000);
  });
}

function processData(data) {
  let args = faker.lorem.words().split(' ');

  return new Promise((resolve) => {
    console.log('yay I\'m done');
    setTimeout(() => resolve(args), 1000);
  });
}

console.log('app starting');

let p = connectToADb('myAwesomeDb')
  .then(db => getData('key', db))
  .then(key => processData(key))
  .then(keys => console.log(keys));

console.log('p =', p);
