var enteredValue = [];  //putting entered values into this array

function numberZero() {
	var numberZeroButton = document.getElementById("zero");
	var numberZeroValue = Number(document.getElementById("zero").value);

	numberZeroButton.onclick = function() {
		var text = document.createTextNode(numberZeroValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberZeroValue);	
	};
}

function numberOne() {
	var numberOneButton = document.getElementById("one");
	var numberOneValue =  Number(document.getElementById("one").value);

	numberOneButton.onclick = function() {
		var text = document.createTextNode(numberOneValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberOneValue);
	};
}

function numberTwo() {
	var numberTwoButton = document.getElementById("two");
	var numberTwoValue = Number(document.getElementById("two").value);

	numberTwoButton.onclick = function() {
		var text = document.createTextNode(numberTwoValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberTwoValue);	
	};
}

function numberThree() {
	var numberThreeButton = document.getElementById("three");
	var numberThreeValue = Number(document.getElementById("three").value);

	numberThreeButton.onclick = function() {
		var text = document.createTextNode(numberThreeValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberThreeValue);	
	};
}

function numberFour() {
	var numberFourButton = document.getElementById("four");
	var numberFourValue = Number(document.getElementById("four").value);

	numberFourButton.onclick = function() {
		var text = document.createTextNode(numberFourValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberFourValue);	
	};
}

function numberFive() {
	var numberFiveButton = document.getElementById("five");
	var numberFiveValue = Number(document.getElementById("five").value);

	numberFiveButton.onclick = function() {
		var text = document.createTextNode(numberFiveValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberFiveValue);	
	};
}

function numberSix() {
	var numberSixButton = document.getElementById("six");
	var numberSixValue = Number(document.getElementById("six").value);

	numberSixButton.onclick = function() {
		var text = document.createTextNode(numberSixValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberSixValue);	
	};
}

function numberSeven() {
	var numberSevenButton = document.getElementById("seven");
	var numberSevenValue = Number(document.getElementById("seven").value);

	numberSevenButton.onclick = function() {
		var text = document.createTextNode(numberSevenValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberSevenValue);	
	};
}

function numberEight() {
	var numberEightButton = document.getElementById("eight");
	var numberEightValue = Number(document.getElementById("eight").value);

	numberEightButton.onclick = function() {
		var text = document.createTextNode(numberEightValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberEightValue);	
	};
}

function numberNine() {
	var numberNineButton = document.getElementById("nine");
	var numberNineValue = Number(document.getElementById("nine").value);

	numberNineButton.onclick = function() {
		var text = document.createTextNode(numberNineValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberNineValue);	
	};
}

//need to prevent multiple decimals in a number
function decimal() {
	var decimalButton = document.getElementById("decimal");
	var decimalValue = document.getElementById("decimal").value;

	decimalButton.onclick = function() {
		var text = document.createTextNode(decimalValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(decimalValue);
/*
		//making sure you can't enter a decimal twice in a number
		for (var i = 0 ; i < enteredValue.length; i++) {}
		var arrayToString = enteredValue.join("");
			if (!arrayToString.match(/^\d+(\.\d+)?([+\-*\/]\d+(\.\d+)?)*$/)) {
			var newText = "";
			var text = document.createTextNode(newText);
			document.getElementById("inputField").appendChild(text);	
*/			
	};
}



function add() {
	var addButton = document.getElementById("add");
	var addSign = document.getElementById("add").value;

	addButton.onclick = function() {
		//if there is no first number then the the entry turns into "0 + "		
		if (!enteredValue[0]) {
			var newText = ("0" +  " " + addSign);
			var text = document.createTextNode(newText);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(newText); 
			//making sure you can't enter an operator twice in a row
		} else if (isNaN(enteredValue[enteredValue.length - 1])){
				var newText = "";
				var text = document.createTextNode(newText)
				document.getElementById("inputField").appendChild(text);
		} else {
			var text = document.createTextNode(addSign);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(addSign);  
		}
	};
}

function subtract() {
	var subtractButton = document.getElementById("subtract");
	var subtractSign = document.getElementById("subtract").value;

	subtractButton.onclick = function() {
		//if there is no first number then the the entry turns into "0 - "		
		if (!enteredValue[0]) {
			var newText = ("0" +  " " + subtractSign);
			var text = document.createTextNode(newText);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(newText); 
			//making sure you can't enter an operative twice in a row
		} else if (isNaN(enteredValue[enteredValue.length - 1])){
				var newText = "";
				var text = document.createTextNode(newText)
				document.getElementById("inputField").appendChild(text);
		} else {
			var text = document.createTextNode(subtractSign);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(subtractSign);  
		}
	};
}

function multiply() {
	var multiplyButton = document.getElementById("multiply");
	var multiplySign = document.getElementById("multiply").value;

	multiplyButton.onclick = function() {
		//if there is no first number then the the entry turns into "0 - "		
		if (!enteredValue[0]) {
			var newText = ("0" +  " " + multiplySign);
			var text = document.createTextNode(newText);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(newText); 
			//making sure you can't enter an operative twice in a row
		} else if (isNaN(enteredValue[enteredValue.length - 1])){
				var newText = "";
				var text = document.createTextNode(newText)
				document.getElementById("inputField").appendChild(text);
		} else {
			var text = document.createTextNode(multiplySign);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(multiplySign);  
		}
	};
}

function divide() {
	var divideButton = document.getElementById("divide");
	var divideSign = document.getElementById("divide").value;

	divideButton.onclick = function() {
		if (!enteredValue[0]) {
			var newText = ("0" +  " " + divideSign);
			var text = document.createTextNode(newText);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(newText); 
			//making sure you can't enter an operative twice in a row
		} else if (isNaN(enteredValue[enteredValue.length - 1])){
				var newText = "";
				var text = document.createTextNode(newText)
				document.getElementById("inputField").appendChild(text);
		} else {
			var text = document.createTextNode(divideSign);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(divideSign);  
		}
	};
}

//need to prevent repeated equal sign being appended to input field
function calculate() {
	var equalButton = document.getElementById("equal");
	var equalSign = document.getElementById("equal").value;

	equalButton.onclick = function() {
		var calculate = enteredValue.join("");
		var answer= eval(calculate);
		var text = document.createTextNode(equalSign);
		document.getElementById("inputField").appendChild(text);
		document.getElementById("answerField").innerHTML= answer;
		console.log(enteredValue);
	};
}


function clear() {
	var clearButton = document.getElementById("clear");
	clearButton.onclick = function() {
	document.getElementById("inputField").innerHTML = "";
	document.getElementById("answerField").innerHTML = "";
	enteredValue = [];
	};
}
//need to lock the undo button once answer is submitted
function undo() {
	var undoButton = document.getElementById("undo");

	undoButton.onclick = function() {
		enteredValue.pop();
		var text = enteredValue.join("");
		document.getElementById("inputField").innerHTML = text;
	};
}




numberZero();
numberOne();
numberTwo();
numberThree();
numberFour();
numberFive();
numberSix();
numberSeven();
numberEight();
numberNine();
decimal();
add();
subtract();
multiply();
divide();
calculate();
clear();
undo();





















