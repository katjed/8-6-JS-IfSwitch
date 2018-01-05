var a = 2,
	b = 3,
	value = (a * a) - (2 * a * b) + (b * b);
console.log('Value is equal to: ' + value);

if(value > 0) {
	console.log('Value is positive');
} else if(value < 0) {
	console.log('Value is negative');
}

var value = 0 ? 'Value is equal to 0' : 'Value is not equal to 0';
console.log(value);
