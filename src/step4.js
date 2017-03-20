/*
 - exception handling
*/

function doSuccesfullySomething(str) {
  return new Promise((resolve, reject) => {
    resolve(str);
  });
}

function failSomething(str) {
  return new Promise((resolve, reject) => {
    reject(str);
  });
}

function printThen(str, pr) {
  console.log(str);
  return pr;
}

let a = () => {
  return doSuccesfullySomething('success 1')
    .then(t => printThen(t, doSuccesfullySomething('success 2')))
    .then(t => printThen(t, failSomething('failure 3')))        // ======|
    .then(t => printThen(t, doSuccesfullySomething('failure 4'))) //     |
    .then(t => printThen(t, doSuccesfullySomething('failure 5'))) //     |
    .then(t => printThen(t, doSuccesfullySomething('failure 6'))) //     |
    .catch(t => printThen(t, doSuccesfullySomething('success 4'))) // <===
    .then(t => printThen(t));
};

let b = () => {
  return doSuccesfullySomething('success 1')
    .then(t => printThen(t, doSuccesfullySomething('success 2')))
    .then(t => printThen(t, failSomething('failure 3')))        // ======|
    .then(t => printThen(t, doSuccesfullySomething('failure 4'))) //     |
    .then(t => printThen(t, doSuccesfullySomething('failure 5'))) //     |
    .then(t => printThen(t, doSuccesfullySomething('failure 6'))) //     |
    .catch(t => printThen(t, failSomething('failure 4'))) // <==========>
    .then(t => printThen(t, doSuccesfullySomething('failure 7'))) //     |
    .then(t => printThen(t, doSuccesfullySomething('failure 8'))) //     |
    .catch(t => printThen(t)); // <=======================================
};


b();

