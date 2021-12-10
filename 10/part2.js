var fs = require('fs');
var lines = fs.readFileSync('10/input.txt').toString().split('\r\n');

var openBrackets = ['(','[','{','<'];
var closedBrackets = [')',']','}','>'];

var scores = [];

lines.forEach(line => {
    var chunkStack = [];


    for(var i=0 ; i<line.length ; i++) {
        var char = line[i];
        if(openBrackets.includes(char)) {
            chunkStack.push(char);
        } else {
            if(openBrackets.indexOf(chunkStack.pop()) != closedBrackets.indexOf(char)) {
                break;
            }
        }

        if((i+1) >= line.length) {
            scores.push(finishLine(chunkStack));
        }
    }
})

function finishLine(line) {
    var lineScore = 0;
    while (line.length > 0) {
        lineScore = 5*lineScore;
        lineScore += (openBrackets.indexOf(line.pop()) + 1);
    }
    return lineScore;
}

console.log(scores.sort(function(a, b){return a-b})[Math.floor(scores.length/2)]);