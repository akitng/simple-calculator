var enteredValue = [];  //putting entered values into this array

function numberOne() {
	var numberOneButton = document.getElementById("one");
	var numberOneValue =  Number(document.getElementById("one").value);

	numberOneButton.onclick = function() {
		var text = document.createTextNode(numberOneValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberOneValue); //this is a just a check in the console
		console.log(enteredValue);		   //this is a just a check in the console
	};
}

function numberTwo() {
	var numberTwoButton = document.getElementById("two");
	var numberTwoValue = Number(document.getElementById("two").value);

	numberTwoButton.onclick = function() {
		var text = document.createTextNode(numberTwoValue);
		document.getElementById("inputField").appendChild(text);
		enteredValue.push(numberTwoValue);	//this is a just a check in the console
		console.log(enteredValue);          //this is a just a check in the console
	};
}


function add() {
	var addButton = document.getElementById("add");
	var addSign = document.getElementById("add").value;

	addButton.onclick = function() {
		//if there is no first number then the the entry turns into "0 + "		
		if (!enteredValue[0]) {
			var newText = ("0" +  " " + addSign);
			console.log("The new text is: " + newText);
			var text = document.createTextNode(newText);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(newText); //this is a just a check in the console
			console.log(enteredValue);  //this is a just a check in the console
			//makeing sure you can't enter an operative twice in a row
		} else if (isNaN(enteredValue[enteredValue.length - 1])){
				console.log("the last value in array is not a number");
				var newText = "";
				var text = document.createTextNode(newText)
				document.getElementById("inputField").appendChild(text);
				calculate();
		} else {
			var text = document.createTextNode(addSign);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(addSign);  //this is a just a check in the console
			console.log(enteredValue);   //this is a just a check in the console
			calculate();
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
			console.log("The new text is: " + newText);
			var text = document.createTextNode(newText);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(newText); //this is a just a check in the console
			console.log(enteredValue);  //this is a just a check in the console
			//makeing sure you can't enter an operative twice in a row
		} else if (isNaN(enteredValue[enteredValue.length - 1])){
				console.log("the last value in array is not a number");
				var newText = "";
				var text = document.createTextNode(newText)
				document.getElementById("inputField").appendChild(text);
		} else {
			var text = document.createTextNode(subtractSign);
			document.getElementById("inputField").appendChild(text);
			enteredValue.push(subtractSign);  //this is a just a check in the console
			console.log(enteredValue);   //this is a just a check in the console
		}
	};
}

function multiply() {
	var multiplyButton = document.getElementById("multiply");
	var multiplySign = document.getElementById("multiply").value;

	multiplyButton.onclick = function() {
		var text = document.createTextNode(multiplySign);
		document.getElementById("inputField").appendChild(text);
	};
}

function divide() {
	var divideButton = document.getElementById("divide");
	var divideSign = document.getElementById("divide").value;

	divideButton.onclick = function() {
		var text = document.createTextNode(divideSign);
		document.getElementById("inputField").appendChild(text);
		divideButton.disabled = true;
	};
}

function calculate() {
	var calculate = enteredValue.join("");
		var answer= eval(calculate);
		console.log(answer);
	var equalButton = document.getElementById("equal");
	equalButton.onclick = function() {
		//var calculate = document.getElementById("inputField").textContent;
		//var answer = eval(calculate); 
		var calculate = enteredValue.join("");
		var answer= eval(calculate);
		console.log(answer);

		document.getElementById("answerField").innerHTML= answer;
	};
}

function clear() {
	var clearButton = document.getElementById("clear");
	clearButton.onclick = function() {
	document.getElementById("inputField").innerHTML = "";
	document.getElementById("answerField").innerHTML = "";
	enteredValue = [];
	console.log('this works');
	};
}


numberOne();
numberTwo();
add();
subtract();
multiply();
divide();
calculate();
clear();


















