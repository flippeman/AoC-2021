var fs = require('fs');
var instructions = fs.readFileSync('2/input.txt').toString().split("\r\n");

var depth = 0;
var pos = 0;

instructions.forEach(inst => {
    if(inst.includes("forward")) {
        pos += parseInt(inst.split(" ")[1]);
    } else {
        depth += inst.includes("up") ? -1 * parseInt(inst.split(" ")[1]) : parseInt(inst.split(" ")[1]);
    }
})

console.log("pos: " + pos);
console.log("depth: " + depth);
console.log("pos * depth = " + (pos*depth));