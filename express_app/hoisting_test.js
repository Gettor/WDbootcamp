function writeNameHoisted(){
	// var name is Hoisted, which means it's defined at the top of its local scope, which is why this function doesn't throw
	console.log(name);  // writes undefined
	var name = "Henry";
	console.log(name);
}

writeNameHoisted();

function writeNameNotHoisted(){
	console.log(unknownName);  // throws exception
	var secondName = "John";
	console.log(secondName);
}

writeNameNotHoisted();