//need to decide how to alert user if distance or time fields are empty 
//when trying to calculate

var pace = document.getElementById("pace");
		
function resetFields() {
	document.getElementById("distance").value = "";
	document.getElementById("hours").value = "";
	document.getElementById("minutes").value = "";
	document.getElementById("seconds").value = "";
	pace.textContent = "";
}

function resetPaceText() {
	//this clears off the paragraph  with id of "pace" from previous calculation
	var distanceField = document.getElementById("distance");
	distanceField.onclick = function() {
		pace.textContent = "";
	}

	var hoursField = document.getElementById("hours");
	hoursField.onclick = function() {
		pace.textContent = "";
	}

	var minutesField = document.getElementById("minutes");
	minutesField.onclick = function() {
		pace.textContent = "";
	}

	var secondsField = document.getElementById("seconds");
	secondsField.onclick = function() {
		pace.textContent = "";
	}
}

window.onload = function() {

	var calculateButton = document.getElementById("btn");
	
	calculateButton.onclick = function() {
		var distance = Number(document.getElementById("distance").value);
		var hours = Number(document.getElementById("hours").value);
		var minutes = Number(document.getElementById("minutes").value);
		var seconds = Number(document.getElementById("seconds").value);

		if (distance == "") {
			document.getElementById("distance").style.borderColor = "red";
			alert("Enter the distance");
			//resetFields();

		} else if (hours == "" && minutes == "" && seconds == "") {
			alert("Enter the time");
			//resetFields();

		}  else {
			var totalMinutes = parseFloat(hours*60 + minutes + (seconds/60));
			var minutesPerMile = parseFloat(totalMinutes/distance);
			var paceMinutes = Math.floor(minutesPerMile);
			var paceSeconds = Math.round((minutesPerMile - paceMinutes)*60);

			if (paceSeconds < 10) {
				paceSeconds = "0" + paceSeconds;
			}

			var pace = document.getElementById("pace");
			pace.textContent= "You need to run " + paceMinutes + ":" + paceSeconds +" minutes per mile.";
		}
		resetPaceText();				
	};

	var reset = document.getElementById("reset");
	reset.onclick = function() {
		resetFields();
	};
};









