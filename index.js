var fs = require('fs');
var readline = require('readline');
var numb;
var input = fs.createReadStream('input.txt');
var output = fs.createWriteStream('output.txt');

var rl = readline.createInterface({
    input: input,
    terminal: false
});

var lineNumber = 1;
rl.on('line', function(line) {
    var T;
    if (lineNumber === 1) {
        T = line;
        lineNumber++;
    } else {
        numb = line;
        var VALS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var mynum = numb.toString().split('').sort();
        var num = numb;
        var counter = 1;
        var ok = true;
        if (num == 0) {
            output.write('Case #' + (lineNumber - 1) + ': INSOMNIA\n');
            lineNumber++;
        } else {
            while (ok) {
                for (var i = 0; i < num.toString().length; i++) {
                    if (mynum.indexOf(num.toString()[i]) == -1) {
                        mynum = mynum.concat(num.toString()[i]).sort();
                    }
                }
                // compare the two arrays
                var is_same = VALS.length === mynum.length && mynum.every(function(val, index) {
                    return val == VALS[index];
                });

                counter++;

                if (!is_same) {
                    num = numb * counter;
                } else {
                    ok = false;
                    output.write('Case #' + (lineNumber - 1) + ': ' + num + '\n');
                    lineNumber++;

                }
            }
        }
    }
});
