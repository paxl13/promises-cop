const faker = require('faker');

/* 
Here is a sample app that doesn't use any promises

It's a simple example of what I call callback hell.

*/

function connectToADb(db, cb) {
  setTimeout(() => cb(db),
             1000);
}

function getData(key, db, cb) {
  setTimeout(() => cb(db, faker.lorem.word()),
             1000);
}

function processData(data, cb) {
  let args = faker.lorem.words().split(' ');

  setTimeout(() => {
    console.log(`yay, I'm done`);
    cb(...args);
  }, Math.random() * 400);
}

console.log('app starting');

connectToADb('myAwesomeDb', (myDb) => {
  let data;

  getData('key', myDb, (d) => {
    processData(d, (...args) => {
      console.log(args);
      data = args;
    });
  });

  console.log(`hey that's the data: ${data}`);
});


