const Promise = require('../../code/promise/Promise')

// example
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 300);
});

promise
  .then(
    (data) => {
      return new Promise((resolve) => {
        resolve('ok')
      })
    },
    (reason) => {
      console.log("fail", reason);
    }
  )
  .then((res) => {
    console.log("succes", res);
  });
