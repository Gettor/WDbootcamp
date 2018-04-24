var winningDiv = -1;
var divs = document.querySelectorAll(".geuess-color");
var resetButton = document.querySelector("#reset-button");
var easyButton = document.querySelector("#easy-mode-button");
var hardButton = document.querySelector("#hard-mode-button");
var buttons = document.querySelectorAll(".navbar-button");

function setMainRgb(red, green, blue) {
	var selector = document.querySelector("#selector");
	selector.textContent = "RGB (" + red + ", " + green + ", " + blue + ")";
}

function assignColor(div, red, green, blue) {
	var styleString = "rgb(" + red + ", " + green + ", " + blue + ")";
	div.style.backgroundColor = styleString;
}

function randomizeColors() {
	winningDiv = Math.floor((Math.random() * 6));
	divs.forEach(function(val, i){
		var red = Math.floor((Math.random() * 256));
		var green = Math.floor((Math.random() * 256));
		var blue = Math.floor((Math.random() * 256));
		assignColor(divs[i], red, green, blue);
		if (winningDiv == i)
		{
			setMainRgb(red, green, blue);
		}
	});
}

function setAllToWinningColor(color) {
	document.querySelector(".jumbotron").style.backgroundColor = color;
	divs.forEach(function(val, i){
		divs[i].style.backgroundColor = color;
	});
	buttons.forEach(function(val, i){
		if (buttons[i].classList.contains("active"))
		{
			buttons[i].style.backgroundColor = color;
		}
		else
		{
			buttons[i].style.color = color;
		}
	});
}

function checkWinner(div) {
	if(div.style.backgroundColor == divs[winningDiv].style.backgroundColor)
	{
		document.querySelector("#navbar-info").textContent = "Yay, you win!";
		setAllToWinningColor(div.style.backgroundColor);
	}
	else
	{
		document.querySelector("#navbar-info").textContent = "Oops, wrong one. Try again!";
		div.classList.add("disabled-color");
		div.style.backgroundColor = "";
	}
}

function reset() {
	randomizeColors();
	document.querySelector(".jumbotron").style.backgroundColor = "";
	document.querySelector("#navbar-info").textContent = "";
	divs.forEach(function(div){
		div.classList.remove("disabled-color");
	});
	buttons.forEach(function(val, i){
		buttons[i].style.backgroundColor = "";
		buttons[i].style.color = "";
	});
}

function toggleNavbarButtons() {
	easyButton.classList.toggle("active");
	hardButton.classList.toggle("active");
}

divs.forEach(function(div){
	div.addEventListener("click", function(){
		if (!this.classList.contains("disabled-color"))
		{
			checkWinner(this);
		}
	});
});

resetButton.addEventListener("click", function(){
	reset();
});

easyButton.addEventListener("click", function(){
	reset();
	for (var i = 3; i < 6; i++)
	{
		divs[i].classList.add("disabled-color");
	}
	toggleNavbarButtons();
});

hardButton.addEventListener("click", function(){
	reset();
	toggleNavbarButtons();
});

randomizeColors();
