/* 
What are promises. 
=================

A promise represents the eventual result of an asynchronous operation. 
It is a placeholder into which the successful result value or 
reason for failure will materialize.

Let look at : https://mdn.mozillademos.org/files/8633/promises.png  

- basic example
*/

function doSuccesfullySomething(str) {
  return new Promise((resolve, reject) => {
    resolve(str);
  });
}

function failSomething(str) {
  return new Promise((resolve, reject) => {
    throw str;
  });
}

let a = () => {
  console.log('simple example');

  return doSuccesfullySomething('a string')
    .then((result) => {
      console.log(result);
    });
};

let b = () => {
  console.log('simple failing example');

  return failSomething('an error')
    .then((result) => {
      console.log('succes', result);
    }, (error) => {
      console.log('error', error);
    });
};

let c = () => {
  console.log('second failing example');

  return failSomething('an error')
    .catch((error) => {
      console.log('error:', error);
    });
};

let d = () => {
  console.log('a promise always return a promise');

  doSuccesfullySomething('a')
    .then((result) => {
      console.log(result);
      return 'b';
    })
    .then((result) => {
      console.log(result);
      return 'c';
    });
};

let e = () => {
  console.log('a promise can return a promise');

  return doSuccesfullySomething('a')
    .then((result) => {
      console.log(result);
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve('I waited 1s'), 1000);
      });
    })
    .then((result) => {
      console.log(result);
      return 'c';
    });
};

c();
