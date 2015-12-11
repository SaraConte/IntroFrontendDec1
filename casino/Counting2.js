document.getElementById("count").onclick = add_inventory;
document.getElementById("count_bottom").onclick = add_inventory_bottom;
document.getElementById("remove").onclick = remove_inventory;
document.getElementById("remove_bottom").onclick = remove_inventory_bottom;

var products = []

function add_inventory() {
	var new_product = document.getElementById("new_product").value;

	products.unshift(new_product); 
		console.log(products);

	print();
}

function add_inventory_bottom() {
	var new_product = document.getElementById("new_product").value;
	
	products.push(new_product);

	print();
}

function remove_inventory() {
	// Take the top item from the list
	products.shift();

	print();
}

function remove_inventory_bottom() {
	// Take the top item from the list
	products.pop();

	print();

}

function print() {
	var new_HTML = "";

	new_HTML = "<ol>";
	for (var i=0; i < products.length; i++) {


		
		new_HTML +=   "<li>" + products[i] + "</li>";
		
	
	}
	new_HTML += "</ol>"

	// Print out the list
	document.getElementById("onScreen").innerHTML = new_HTML; 

}