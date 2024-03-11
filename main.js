
const _ = require('lodash');


let data = [];
for (let i = 0; i < 100; i++) {
  data.push('String ' + (i + 1));
}


let randomString = _.sample(data);
console.log(randomString);


let shuffledData = _.shuffle(data);
console.log(shuffledData);


let firstTenStrings = _.take(data, 10);
console.log(firstTenStrings);
