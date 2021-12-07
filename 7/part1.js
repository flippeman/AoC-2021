var fs = require('fs');
var positions = fs.readFileSync('7/input.txt').toString().split(',').map(pos => parseInt(pos));

var sortedPos = positions.sort((a, b) => a - b);
var middle = Math.floor(sortedPos.length/2);
var median = sortedPos.length % 2 == 0 ? ((sortedPos[middle] + sortedPos[middle-1]) / 2) : sortedPos[middle];

var fuelTot = 0;
sortedPos.forEach(pos => {
    fuelTot += Math.abs(median - pos);
})

console.log(fuelTot);