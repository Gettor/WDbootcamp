function average(array){
	var sum = array.reduce(function(p, c){
		return p + c;
	});
	return Math.round(sum / array.length);
}

var scores = [10, 10, 10, 10]; // Sanity check to expect return 10;
console.log("First call: " + average(scores));

var scores2 = [1, 2, 3, 4, 1, 15, 28, 91, 31];
console.log("Second call: " +  average(scores2));