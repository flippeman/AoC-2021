var fs = require('fs');
var sonar = fs.readFileSync('1/input.txt').toString().split("\r\n");


var increases = 0;
var prevPing = parseInt(sonar[0]) + parseInt(sonar[1]) + parseInt(sonar[2])

for(var i=1 ; i<sonar.length-2 ; i++) {
    ping = parseInt(sonar[i]) + parseInt(sonar[i+1]) + parseInt(sonar[i+2]);
    if(ping > prevPing) {
        increases++;
    }
    prevPing = ping;
}

console.log(increases);