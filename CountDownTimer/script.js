function startCountdown() {
	//gets contents of the "minutes" text box
	var minutes= document.getElementById("minutes").value;
	//checks to see if it's a number
	if (isNaN(minutes)) {
		alert("Please enter a number!");
		return;
	}
	// how many seconds?
	secondsRemaining = minutes * 60;
	//every second call the "tick" function 
	intervalHandle = setInterval(tick, 1000);
	//hide the form
	document.getElementById("inputArea").style.display= "none";
}

function tick() {
	var timeDisplay =  document.getElementById("time");
	//turn seconds into mm:ss
	var min= Math.floor(secondsRemaining/60);
	var sec = secondsRemaining - (min * 60);
	//add a leading zero once seconds go one digit
	if (sec < 10) {
		sec = "0" + sec;
	}
	//add a leading zero if minutes go zero
	if (min === 0 || min < 10) {
		min = "0" + min;
	}
	//concatenate mm:ss with colon
	var message =  min.toString()  + " : " +  sec;
	// change time display
	timeDisplay.innerHTML = message;
	// stop when seconds gets down to zero
	
	if (secondsRemaining === 0) {
		var soundEfx = document.getElementById("soundEfx");
		soundEfx.play();
		alert("Done!");
		clearInterval(intervalHandle);
		location.reload();
	}
	secondsRemaining--;
}


//as soon as the page is loaded add the input field
window.onload = function() {
	//create input box with the id of "minutes"
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");
	
	//create countdown button 
	var startButton = document.createElement("input");
	startButton.setAttribute("type", "button");
	startButton.setAttribute("value", "Start Countdown");

	startButton.onclick = function() {
		startCountdown();
	};

//add the input field and button to the DOM, to the div called "inputArea"
document.getElementById("inputArea").appendChild(inputMinutes);
document.getElementById("inputArea").appendChild(startButton);
};