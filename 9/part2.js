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
        lowerThanUp = pos < positions[index-lineLength];
    }

    if(index < (positions.length - lineLength)) {
        lowerThanDown = pos < positions[index + lineLength]
    }

    if(index%lineLength > 0) {
        lowerThanLeft = pos < positions[index-1];
    }

    if((index+1)%lineLength != 0) {
        lowerThanRight = pos < positions[index+1];
    }
    
    if(lowerThanUp && lowerThanDown && lowerThanLeft && lowerThanRight) {
        lowPoints.push(index);
    }
})

var basins = [];
lowPoints.forEach(index => basins.push(checkAdjacentNumbers(index, [index])))

var basinSizes = [];
basins.forEach(basin => basinSizes.push(basin.length));

var max1 = Math.max(...basinSizes);
basinSizes.splice(basinSizes.indexOf(max1), 1);
var max2 = Math.max(...basinSizes);
basinSizes.splice(basinSizes.indexOf(max2), 1);
var max3 = Math.max(...basinSizes);
console.log(max1 * max2 * max3);


function checkAdjacentNumbers(index, addedIndices) {
    if((index >= lineLength) && (!addedIndices.includes(index-lineLength)) && (positions[index-lineLength] != 9)) {
        addedIndices.push(index-lineLength);
        addedIndices.concat(checkAdjacentNumbers(index-lineLength, addedIndices));
    }

    if((index < (positions.length - lineLength)) && (!addedIndices.includes(index+lineLength)) && (positions[index+lineLength] != 9)) {
        addedIndices.push(index+lineLength);
        addedIndices.concat(checkAdjacentNumbers(index+lineLength, addedIndices));
    }

    if((index%lineLength > 0) && (!addedIndices.includes(index-1)) && (positions[index-1] != 9)) {
        addedIndices.push(index-1);
        addedIndices.concat(checkAdjacentNumbers(index-1, addedIndices));
    }

    if(((index+1)%lineLength != 0) && (!addedIndices.includes(index+1)) && (positions[index+1] != 9)) {
        addedIndices.push(index+1);
        addedIndices.concat(checkAdjacentNumbers(index+1, addedIndices));
    }

    return addedIndices;
}