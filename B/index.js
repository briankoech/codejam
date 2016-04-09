var fs = require('fs');
var readline = require('readline');
var input = fs.createReadStream('input-sample.txt');
var output = fs.createWriteStream('output-sample.txt');

rl = readline.createInterface({
    input: input,
    terminal: true
});

var lineNumber = 0;
rl.on('line', function(line) {
    var T;
    if (lineNumber === 0) {
        T = line;
        lineNumber++;
    } else {
        // while the chapos are unsorted
        // loop through the chapos getting the same type
        var chapos = line.toString().split('');
        var newchapos = chapos.filter(function(val, pos) {
            return val === '+';
        });
        var counter = 0;
        while (chapos.length != newchapos.length) {
            if (chapos[0] == '-') {
                for (var i = 0, len = chapos.length; i < len; i++) {
                    if (chapos[i] == '+') {
                        break;
                    }
                    chapos[i] = '+';
                }
                counter++;
            } else if (chapos[0] == '+') {
                for (var i = 0, len = chapos.length; i < len; i++) {
                    if (chapos[i] == '-') {
                        break;
                    }
                    chapos[i] = '-';
                }
                counter++;
            }
            newchapos = chapos.filter(function(val, pos) {
              return val === '+';
            });
        }
        output.write('Case #'+ lineNumber +': ' + counter + '\n');
        lineNumber++;
        console.log(counter, chapos);
    }
});
