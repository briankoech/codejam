var myset = new Set();
var jamcoins = 0;
var test;
while(jamcoins < 3) {
  var str = '';
  for (var i = 0; i < 4; i++) {
    str = str.concat(Math.round(Math.random()).toString());
  } 
  test = '1'.concat(str, '1');
  test = '1001';
  // get the interpretations
  for(var b = 2; b <= 10; b++) {
    var sum = 0;
    for(var j = 0; j < test.length; j++) {
      sum += test[j] * Math.pow(b, j);
      // console.log(sum, test[j]);
    }
    console.log(sum);
  }
  
  jamcoins = 4;
}
console.log(test);
// myset.add('101');
// myset.add('101');
// myset.size;