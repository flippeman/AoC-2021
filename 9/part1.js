var fs = require('fs');
var positions = fs.readFileSync('9/input.txt').toString().split('').map(pos => parseInt(pos)).filter(pos => !Number.isNaN(pos));
var lineLength = fs.readFileSync('9/input.txt').toString().split('\r\n')[0].length;

var lowPoints = [];

positions.forEach((pos,index) => {
    var lowerThanUp = true, 
    lowerThanDown = true, 
    lowerThanLeft = true, 
    lowerThanRight = true;

    if(index >= lineLength) {
        lowerThanUp = pos < positions[index-(lineLength)];
    }

    if(index < (positions.length - lineLength)) {
        lowerThanDown = pos < positions[index + (lineLength)]
    }

    if(index%lineLength > 0) {
        lowerThanLeft = pos < positions[index-1];
    }

    if((index+1)%lineLength != 0) {
        lowerThanRight = pos < positions[index+1];
    }
    
    if(lowerThanUp && lowerThanDown && lowerThanLeft && lowerThanRight) {
        lowPoints.push(pos);
    }

})

console.log(lowPoints.reduce((a,b) => a + b + 1, 0));