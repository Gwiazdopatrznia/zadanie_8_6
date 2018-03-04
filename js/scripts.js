var a = prompt('Enter a'),
	b = prompt('Enter b'),
	value = (a * a) - (2 * a * b) - (b * b);

console.log('Operation with a: ' + a + ' and b: ' + b + ' is equal to: ' + value);

if (value > 0) {
    console.log('wynik dodatni');
} else if (value < 0) {
    console.log('wynik ujemny');
} else {
	console.log('wynik równy: ' + value);
}
