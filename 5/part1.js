var fs = require('fs');
var input = fs.readFileSync('5/input.txt').toString().split("\r\n").map(seg => seg.split(" -> "));
var vents = input.map(vent => vent.map(loc => loc.split(',')));

var doubleOverlap = 0;
var locations = new Array(1000).fill().map(()=>Array(1000).fill(0));

vents.forEach(vent =>{
    var start = vent[0];
    var finish = vent[1]

    if(start[0] == finish[0]) {
        var from = parseInt(start[1]) > parseInt(finish[1]) ? parseInt(finish[1]) : parseInt(start[1]);
        var to = parseInt(start[1]) < parseInt(finish[1]) ? parseInt(finish[1]) : parseInt(start[1]);

        for(var row=from ; row<=to ; row++) {
            locations[start[0]][row] += 1;
            if(locations[start[0]][row] == 2) {
                doubleOverlap++;
            }
        }
        
    } else if (start[1] == finish[1]) {
        var from = parseInt(start[0]) > parseInt(finish[0]) ? parseInt(finish[0]) : parseInt(start[0]);
        var to = parseInt(start[0]) < parseInt(finish[0]) ? parseInt(finish[0]) : parseInt(start[0]);
        
        for(var column=from ; column<=to ; column++) {
            locations[column][start[1]] += 1;
            if(locations[column][start[1]] == 2) {
                doubleOverlap++;
            }
        }
    }
});
console.log(doubleOverlap);