function cancelButton() {
		//create cancel button 
		var cancelButton = document.createElement("input");
		cancelButton.setAttribute("type", "button");
		cancelButton.setAttribute("value", "Cancel Countdown");

		//add cancel button to div named "cancel"
		document.getElementById("cancel").appendChild(cancelButton);

		//reload page when cancel button is clicked
		cancelButton.onclick = function (){
			location.reload();
		};  
}	

function startCountdown() {
	//gets contents of the "minutes" text box
	var minutes= document.getElementById("minutes").value;
	//checks to see if it's a number
	if (isNaN(minutes)) {
		alert("Please enter a number!");
		location.reload();
	}	
	if (minutes < .05) {
		alert("Please enter another number!");
		location.reload();
	}
	
	// how many seconds?
	secondsRemaining = minutes * 60;
	//every second call the "tick" function 
	intervalHandle = setInterval(tick, 1000);
	//hide the form
	document.getElementById("inputArea").style.display= "none";

	cancelButton();
}

function timeFormat() {
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
}		

function tick() {
	timeFormat();
	
	if (secondsRemaining === 0) {
		var soundEfx = document.getElementById("soundEfx");
		soundEfx.play();
		alert("Done!");
		clearInterval(intervalHandle);
		location.reload();
	}
	secondsRemaining--;
}

function createInputBox() {
	//create input box with the id of "minutes"
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");
	inputMinutes.setAttribute("value", "enter time in minutes");

	//add the input field to the DOM, to the div called "inputArea"
	document.getElementById("inputArea").appendChild(inputMinutes);

	//input field is cleared of hint when clicked in
	inputMinutes.onclick = function() {
	inputMinutes.setAttribute("value", "");
	};
}

function countdownButton() {
	//create countdown button 
	var startButton = document.createElement("input");
	startButton.setAttribute("id", "startButton");
	startButton.setAttribute("type", "button");
	startButton.setAttribute("value", "Start Countdown");

	//add the start button to the DOM, to the div called "inputArea"
	document.getElementById("inputArea").appendChild(startButton);

	//2 ways we can start timer...with onclick or addeventlistener
	//startButton.onclick = function() {
	//	startCountdown();
	//};
	startButton.addEventListener("click", startCountdown);
}

function clearButton() {
	//create clear button
	var clearButton = document.createElement("input");
	clearButton.setAttribute("type", "button");
	clearButton.setAttribute("value", "Clear");

	//add clear button to the DOM, to the div called "inputArea"
	document.getElementById("inputArea").appendChild(clearButton);

	//input field is emptied when button is clicked
	clearButton.onclick = function() {
		document.getElementById("minutes").value = "";
	};
}

window.onload = function() {
	createInputBox();
	countdownButton();
	clearButton();
};
	

	
