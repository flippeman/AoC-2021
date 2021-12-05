var fs = require('fs');
var input = fs.readFileSync('4/input.txt').toString().split("\r\n\r\n");

var bingoNumbers = input[0].split(",");
var bingoBoards = []
input.slice(1).forEach(board => {
    bingoBoards.push(board.split("\n").map(line => line.match(/.{1,3}/g).map(num => num.replace(/\s/g, ''))).flat(2));
});

var bingo = false;
while(!bingo) {
    var drawNumber = bingoNumbers.shift();

    bingoBoards.map(function(board, index) {
        bingoBoards[index] = markNumber(board, drawNumber);
        if(boardHasBingo(bingoBoards[index])) {
            bingo = true;
            console.log(getScore(bingoBoards[index], drawNumber));
        }
    });

    if(bingoNumbers.length < 1) {
        console.log("no bingo");
        break;
    }
}


function markNumber(board, number) {
    var markedBoard = []
    board.forEach(num => {
        markedBoard.push(num == number ? 'x' : num);
    });
    return markedBoard;
}

function boardHasBingo(board) {
    //check if rows has bingo
    for(var i=0 ; i<(board.length/5) ; i++) {

        if(board.slice(i*5,i*5+5).every(num => num == 'x')) {
            return true;
        }
    }

    //check if columns has bingo
    for(var column=0 ; column<board.length/5 ; column++) {
        var columnNums = [];

        for(var row=0; row<board.length/5 ; row++) {
            columnNums.push(board[column + row*5]);
        }
        if(columnNums.every(num => num == 'x')) {
            return true;
        }
    }

    return false;
}

function getScore(board, finalNumber) {
    var sum = 0;
    board.forEach(num => {
        sum += num == 'x' ? 0 : parseInt(num)

    });
    console.log("finalNumber: " + finalNumber);
    console.log("sum: " + sum);
    return sum * finalNumber;
}