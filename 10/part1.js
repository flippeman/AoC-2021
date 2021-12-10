var fs = require('fs');
var lines = fs.readFileSync('10/input.txt').toString().split('\r\n');

var openBrackets = ['(','[','{','<'];
var closedBrackets = [')',']','}','>'];

var illegalChars = [];

lines.forEach(line => {
    var chunkStack = [];

    for(var i=0 ; i<line.length ; i++) {
        var char = line[i];
        if(openBrackets.includes(char)) {
            chunkStack.push(char);
        } else {
            if(openBrackets.indexOf(chunkStack.pop()) != closedBrackets.indexOf(char)) {
                illegalChars.push(char);
                break;
            }
        }
    }

})

var score = 0;
illegalChars.forEach(char => {
    switch (char) {
        case ')':
            score += 3;
            break;
        case ']':
            score += 57;
            break;
        case '}':
            score += 1197;
            break;
        case '>':
            score += 25137;
            break;
    }
})

console.log(score);
