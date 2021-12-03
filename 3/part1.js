var fs = require('fs');
var binaries = fs.readFileSync('3/input.txt').toString().split("\r\n");

var binarySum = new Array(binaries[0].length).fill(0);

binaries.forEach(binary => {
    for(var i=0 ; i<binary.length ; i++) {
        binarySum[i] += binary[i] == '1' ? 1 : 0;
    }
})

var gammaBinary = binarySum.map(x => x > (binaries.length/2) ? 1 : 0);

var gammaDecimal = parseInt(gammaBinary.join(''),2);
var epsilonDecimal = (Math.pow(2,binaries[0].length)-1) - gammaDecimal;

console.log("Gamma * Epsilon = " + (gammaDecimal * epsilonDecimal));