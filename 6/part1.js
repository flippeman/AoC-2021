var fs = require('fs');
var school = fs.readFileSync('6/input.txt').toString().split(',').map(fish => parseInt(fish));

var days = 80;

var newFish = 0

for(var i=0 ; i<days ; i++) {
    
    school.forEach((fish, index) => {

        if(school[index] == 0) {
            newFish++;
            school[index] = 6;
        } else {
            school[index] = fish - 1;
        }
    })

    school = school.concat(new Array(newFish).fill(8));
    newFish=0;
}

console.log(school.length);