
document.getElementById("roll").onclick = calculate;

function calculate() {
	// Get the numbers from the inputs
	var num1 = parseInt(document.getElementById("number1").value);
	// Pass them to count

	document.getElementById("solution").innerHTML = "<h3>Survey Says</h3>"; 

	var dice_img = ['.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

	for (var i=0; i <= num1; i++) {
		console.log(i);
		// Generate a random number between 1 and 6
	
		// Show the correct dice side for the randomly generated number

		// <img scr="2.png">
		document.getElementById("solution").innerHTML += "<img src = '2.png' />" + dice_img[side];

}
}