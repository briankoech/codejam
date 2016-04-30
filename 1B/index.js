var fs = require('fs');
var readline = require('readline');
var numb;
var input = fs.createReadStream('A-small-practice.in');
var output = fs.createWriteStream('large-output.txt');

var rl = readline.createInterface({
    input: input,
    terminal: false
});

var lineNumber = 1;
rl.on('line', function(str) {
    var numb = '';
    var line = str;
    if (lineNumber === 1) {
        lineNumber++;
    } else {
        var nums = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
        var phone = [];
        while (line.length) {
            nums.forEach(function(val) {
                var bckup = line;
                var found = true;
                for (var i = 0; i < val.length; i++) {
                    if (line.includes(val[i])) {
                        line = line.replace(val[i], '');
                    } else {
                        line = bckup;
                        found = false;
                        break;
                    }
                }
                if (found) {
                    phone.push(val);
                }
            });
        }

        phone.forEach(function(val) {
            numb += nums.indexOf(val);
        });


        console.log(lineNumber, phone, numb.split('').sort().join().replace(/,/g, ''));
        output.write('Case #' + (lineNumber - 1) + ': ' + numb.split('').sort().join().replace(/,/g, '') + '\n');
        lineNumber++;
    }
});
