/*global console*/
var letter;
var i = 0;
var k = 0;

while (!letter) {

	letter = prompt("Enter a chacter?");
	console.log(letter);

}


for (i = 0; i < 10; i += 1) {
	for (k = 0; k <= i; k += 1) {
		document.write(letter);
	}
	document.write("<br>");
}

