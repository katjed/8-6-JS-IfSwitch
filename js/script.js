var a = 2,
	b = 3,
	value = (a * a) - (2 * a * b) + (b * b);
console.log('Value is equal to: ' + [(a * a) - (2 * a * b) + (b * b)]);

if(value > 0) {
	console.log('Value is bigger than 0');
} else {
	console.log('Value is less than 0');
}

var value = 0 ? 'Value is equal to 0' : 'Value is not equal to 0';
console.log(value);
