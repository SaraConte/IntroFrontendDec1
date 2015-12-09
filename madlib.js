// Make a Madlib with the user



var time = prompt("Enter military time.");
if (time >= 0 && time <12) {
	time = " Good Morning!";
} else if (time >= 12 && time < 17) {
	time = " Good Afternoon!";
} else if (time >= 17 && time < 22) {
	time = " Good Evening!";
} else if (time >= 22 && time < 24) {
	time = " Good Night!";
} else {
	time = " Good Day!";
}

var madlib = time 

var age = prompt ("How old are you?")
if (age >= 0 && age < 10) {
	age = "You're a baby.";
}else if (age >= 10 && age < 21) {
	age = "You're growing up.";
} else if (age >= 21 && age < 40) {
	age = "You're middle aged.";
} else if (age >= 40 && age < 100) {
	age = "You're old.";
} else {
	age = "You're young at heart."
}


madlib += " It was a ";

var adverb = prompt("Give me an adverb. Please.");

// Check that you got something in adverb
if (adverb == null) {
   adverb = "stormy";
}

madlib = madlib + adverb + " night last night. Local sources say ";

var nameof = prompt("Give me a name, please.");
if (nameof == null) {
   nameof = "Steve";
}

madlib = madlib + nameof + " was seen ";

var verb = prompt("Give me a verb, PLEASE.");
if (verb == null){
   verb = "dancing";
}

madlib += verb + " on a ";

var thing = prompt("Give me an inanimate object.");
if (thing == null){
   thing = "book";
}

madlib += thing + ". Police say this is ";

var adjective = prompt("Give me an adjective.");
if (adjective == null){
   adjective = "nature";
}

madlib += adjective + " though, so they will continue to do nothing.";

var time = prompt("Enter military time.");
if (time >= 0 && time <12) {
	time = " Good Morning!";
} else if (time >= 12 && time < 17) {
	time = " Good Afternoon!";
} else if (time >= 17 && time < 22) {
	time = " Good Evening!";
} else if (time >= 22 && time < 24) {
	time = " Good Night!";
} else {
	time = " Good Day!";
}

madlib += time;



// Print the madlib to the console.
console.log(madlib);

// Add the madlib to the webpage.
// ===============================
// get the madlib div from the html page, store a reference to it in Javascript
var madlib_div = document.getElementById("madlib");

// add the madlib into the div
madlib_div.textContent = madlib;





