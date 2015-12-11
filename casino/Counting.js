document.getElementById("count").onclick = calculate;

function calculate() {
	// Get the numbers from the inputs
	var num1 = parseInt(document.getElementById("number1").value);
	// Pass them to count

	document.getElementById("solution").innerHTML = "<h3>Survey Says</h3>"; 

	for (var i=0; i <= num1; i++) {
		console.log(i);
	
	// Update the div with the sum
	document.getElementById("solution").innerHTML += i + "<br>";  

}
}