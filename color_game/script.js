function setMainRgb(red, green, blue) {
	var selector = document.querySelector("#selector");
	selector.textContent = "RGB (" + red + ", " + green + ", " + blue + ")";
}

setMainRgb("100", 100, 100);

// var tron = document.querySelector(".jumbotron");
// tron.addEventListener("mouseover", function(){
// 	this.style.backgroundColor = "black";
// });