// Method 1 
var a = 2,
	b = 3,
	value = (a * a) - (2 * a * b) + (b * b);
console.log('Value is equal to: ' + value);

if(value > 0) {
	console.log('Value is positive');
} else if(value < 0) {
	console.log('Value is negative');
} 

if(value == 0) {
	console.log('Value is equal to 0');
} else {
	console.log('Value is not equal to 0');
} 

// Method 2
var value = value == 0 ? 'Value is equal to 0' : 'Value is not equal to 0';
console.log(value); 

// Method 3
var a = prompt('Enter a'),
	b = prompt('Enter b'),
	value = (a * a) - (2 * a * b) + (b * b);
alert('Value is equal to: ' + value);
console.log('Value is equal to: ' + value);

if (value > 0) {
	console.log('Value is positive');
} else if (value < 0) {
	console.log('Value is negative');
} else if (value == 0) {
	console.log('Value is equal to 0');
} else {
	console.log('Wrong data');
}