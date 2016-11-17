function numberOne() {
	var numberOneButton = document.getElementById("one");
	var numberOneValue =  Number(document.getElementById("one").value);

	numberOneButton.onclick = function() {
		var text = document.createTextNode(numberOneValue);
		document.getElementById("inputField").appendChild(text);
	};
}

function numberTwo() {
	var numberTwoButton = document.getElementById("two");
	var numberTwoValue = Number(document.getElementById("two").value);
	numberTwoButton.onclick = function() {
		var text = document.createTextNode(numberTwoValue);
		document.getElementById("inputField").appendChild(text);
	};
}


function add() {
	var addButton = document.getElementById("add");
	var addSign = document.getElementById("add").value;

	addButton.onclick = function() {
		var text = document.createTextNode(addSign);
		document.getElementById("inputField").appendChild(text);
	};
}

function subtract() {
	var subtractButton = document.getElementById("subtract");
	var subtractSign = document.getElementById("subtract").value;

	subtractButton.onclick = function() {
		var text = document.createTextNode(subtractSign);
		document.getElementById("inputField").appendChild(text);
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
	};
}

function calculate() {
	var equalButton = document.getElementById("equal");
	equalButton.onclick = function() {
		var calculate = document.getElementById("inputField").textContent;
		var answer = eval(calculate); 
		document.getElementById("inputField").innerHTML= answer;
	};
}

function clear() {
	var clearButton = document.getElementById("clear");
	clearButton.onclick = function() {
	document.getElementById("inputField").innerHTML = "";
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


















