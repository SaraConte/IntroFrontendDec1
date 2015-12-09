
//Add an event listener to the sum button
document.getElementById("sum").onclick = calculate;

function calculate() {
	// Get the numbers from the inputs
	var num1 = parseInt(document.getElementById("number1").value);
	var num2 = parseInt(document.getElementById("number2").value);
	// Pass them to add
	var sum = add(num1, num2);
	var sub = subtract(num1, num2);
	var mult = multiply(num1, num2);
	var divi = divide (num1, num2);
	var avg = average (num1, num2);

	// Update the div with the sum
	document.getElementById("solution").innerHTML = "<h3>Sum: </h3>" + sum + "<h3>Difference: </h3>" + sub + "<h3>Multiplied: </h3>" + mult + "<h3>Divided: </h3>" + divi + "<h3>Average: </h3>" + avg;
}
function add (number1, number2) {
	//add together the two passed numbers
	var sum = number1 + number2;

	//return the sum of the passed numbers
	return sum;	
}

function subtract(number1, number2) {
   // add together the two passed numbers
   var total = number1 - number2;

  return total;
}


function multiply(number1, number2) {
   // add together the two passed numbers
   var total = number1 * number2;

  return total;
}

function divide(number1, number2) {
   // add together the two passed numbers
   var total = number1 / number2;

  return total;
}

function average(number1, number2) {
   // add together the two passed numbers
   var sum = add(number1, number2) 
   var total = divide(sum, 2)

  return total;
}