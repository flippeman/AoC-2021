var fs = require('fs');
var positions = fs.readFileSync('7/input.txt').toString().split(',').map(pos => parseInt(pos));

var average = 0;
positions.forEach(pos => average += pos);
average = Math.floor(average/positions.length);

var fuelTot = 0;
positions.forEach(pos => {
    fuelTot += (((Math.abs(pos-average))*(Math.abs(pos-average)+1))/2);
})

console.log(fuelTot);