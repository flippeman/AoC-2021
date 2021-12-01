var fs = require('fs');
var sonar = fs.readFileSync('1/input.txt').toString().split("\r\n");


var increases = 0;

var prevPing = sonar[0]

sonar.forEach(ping => {
    if(parseInt(ping) > parseInt(prevPing)) {
        increases++;
    }
    prevPing = ping;
});

console.log(increases);