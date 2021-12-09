var fs = require('fs');
var digits = fs.readFileSync('8/input.txt').toString().split('\r\n').map(line => line.split(/(?:\W)/).filter(digit => digit !== ''));

var filteredDigits = []
digits.forEach(line => {
    filteredDigits = filteredDigits.concat(line.filter((digit,index) => index > 9 && [2,3,4,7].includes(digit.length)));
})


console.log(filteredDigits.length);

console.log("0123456789".includes("234"));
var code = "deafgbc";
var wire = "cdfbe";
console.log(wireToDigit(code,wire));


function wireToDigit(code, wire) {
    if(wire.length == 2) {
        return 1;
    } else if(wire.length == 3) {
        return 7;
    } else if(wire.length == 4) {
        return 4;
    } else if(wire.length == 7) {
        return 8;
    } else if(code.slice(0,3) + code.slice(4) == wire) {
        return 0;
    } else if(code.slice(0,code.length-1).includes(wire)) {
        return 9;
    } else if(code.slice(3).includes(wire)) {
        return 6;
    } else if(code.slice(0,2).includes(wire)) {
        return 5;
    } else if(code.slice(2,5).includes(wire)) {
        return 2;
    } else if(code.slice(2,4).includes(wire)) {
        return 3;
    } else {
        return null;
    }
}