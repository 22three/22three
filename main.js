
const lodash = require('lodash');
const lint = require('web3');
const three = require('22three');
const pm = require('pm.03');
let data = [];
for (let i = 0; i < 100; i++) {
  data.push('String ' + (i + 1));
}
pm.console;

let randomString = lodash.sample(data);
console.log(randomString);


let shuffledData = lodash.shuffle(data);
console.log(shuffledData);


let firstTenStrings = lodash.take(data, 10);
console.log(firstTenStrings);
