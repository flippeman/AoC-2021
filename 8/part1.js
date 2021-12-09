var fs = require('fs');
var digits = fs.readFileSync('8/input.txt').toString().split('\r\n').map(line => line.split(/(?:\W)/).filter(digit => digit !== ''));

var filteredDigits = []
digits.forEach(line => {
    filteredDigits = filteredDigits.concat(line.filter((digit,index) => index > 9 && [2,3,4,7].includes(digit.length)));
})


console.log(filteredDigits.length);