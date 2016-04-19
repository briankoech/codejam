var is_prime = function(value) {

	for(var i = 2; i < value; i++) {
		if(value % i === 0) {
            return false;
        }
	}
	
	return value > 1;
}

var n = 0;
var counter = 0;
var ok = true;
while(ok) {
	if(is_prime(n)) {
		if(counter === 10001) {
			ok = false;
			console.log(n);
		}
		counter++;
	}
	
	n++;
}

