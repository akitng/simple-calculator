var	numberSeven = document.getElementsByClassName("number")[0].innerHTML;
var	numberEight = document.getElementsByClassName("number")[1].innerHTML;
var	numberNine = document.getElementsByClassName("number")[2].innerHTML;
var	numberFour = document.getElementsByClassName("number")[3].innerHTML;
var	numberFive = document.getElementsByClassName("number")[4].innerHTML;
var	numberSix = document.getElementsByClassName("number")[5].innerHTML;
var	numberOne = document.getElementsByClassName("number")[6].innerHTML;
var	numberTwo = document.getElementsByClassName("number")[7].innerHTML;
var	numberThree = document.getElementsByClassName("number")[8].innerHTML;


numberSeven.onclick = function () {
	document.getElementbyId("answer").innerHTML(numberSeven);
	console.log("notworking");
}

//check to see if grabbing the right elements. delete later
console.log(numberSeven+numberEight+numberNine+numberFour+numberFive+numberSix+
	numberOne+numberTwo+numberThree);


