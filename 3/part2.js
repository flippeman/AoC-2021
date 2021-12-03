var fs = require('fs');
var binaries = fs.readFileSync('3/input.txt').toString().split("\r\n");

var mostCommonBinary = getMostCommonBinary(binaries, 0, true);
var leastCommonBinary = mostCommonBinary == '1' ? '0' : '1';

var oxygenRating = filterBinaries(binaries, mostCommonBinary, 0, true);
var co2Rating = filterBinaries(binaries, leastCommonBinary, 0, false);

console.log(parseInt(oxygenRating, 2) * parseInt(co2Rating, 2));




function filterBinaries(binaries, sortingBinary, index, bool) {
    var newBinaries = binaries.filter(binary => binary[index] == sortingBinary);

    return newBinaries.length == 1 ? newBinaries[0] : filterBinaries(newBinaries, getMostCommonBinary(newBinaries, index+1, bool), index+1, bool);
}

function getMostCommonBinary(binaries, index, bool) {
    var mostCommon = 0;

    binaries.forEach(binary => {
            mostCommon += binary[index] == '1' ? 1 : 0;
    })

    mostCommon = mostCommon >= binaries.length/2 ? '1' : '0';
    var leastCommon = mostCommon == '1' ? '0' : '1';

    return bool ? mostCommon : leastCommon;
}