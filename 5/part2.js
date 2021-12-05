var fs = require('fs');
var input = fs.readFileSync('5/input.txt').toString().split("\r\n").map(seg => seg.split(" -> "));
var vents = input.map(vent => vent.map(loc => loc.split(',')));

var doubleOverlap = 0;
var locations = new Array(1000).fill().map(()=>Array(1000).fill(0));

vents.forEach(vent =>{
    var start = vent[0];
    var finish = vent[1]
    var overlap = 0;

    if(start[0] == finish[0]) {
        range(start[1], finish[1]).forEach(i => {
            overlap = locations[start[0]][i] += 1;
            if(overlap == 2) {
                doubleOverlap++;
            }
        });

    } else if (start[1] == finish[1]) {
        range(start[0], finish[0]).forEach(i => {
            overlap = locations[i][start[1]] += 1;
            if(overlap == 2) {
                doubleOverlap++;
            }
        });

    } else {
        var colRange = range(start[0], finish[0]);
        var rowRange = range(start[1], finish[1]);
        for(var i=0 ; i<colRange.length ; i++) {
            overlap = locations[colRange[i]][rowRange[i]] += 1;
            if(overlap == 2) {
                doubleOverlap++;
            }
        }
    }
});

console.log(doubleOverlap);



function range(start, finish) {
    var range = [];

    if(parseInt(start) < parseInt(finish)) {
        for(i=parseInt(start) ; i <= parseInt(finish) ; i++) {
            range.push(i);
        }
    } else {
        for(i=parseInt(start) ; i >= parseInt(finish) ; i--) {
            range.push(i);
        }
    }
    return range;
}