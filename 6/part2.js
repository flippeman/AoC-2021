var fs = require('fs');
var input = fs.readFileSync('6/input.txt').toString().split(',').map(fish => parseInt(fish));

var school = new Array(7).fill(0);
var kindergarten = new Array(2).fill(0);
input.forEach(fish => school[fish]++)

var days = 256;
var newFish = 0;

for(var i=0 ; i<days ; i++) {
    newFish = school[i%7];
    school[i%7] += kindergarten.shift();
    kindergarten = [kindergarten[0],newFish];
    newFish=0;
}

console.log(school.concat(kindergarten).reduce((sum,fish) => sum+fish, 0));