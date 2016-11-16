function btnCalculate() {
var mealCost = parseFloat(document.getElementById("txtMealCost").value);
var tipPercentage = parseFloat(document.getElementById("txtTipPercentage").value) * 0.01;
var tipTotal = mealCost * tipPercentage;
document.getElementById("lblTipTotal").innerHTML = "$" + parseFloat(tipTotal).toFixed(2);

}


function btnClear(){
    document.getElementById('txtMealCost').value = "";
    document.getElementById('txtTipPercentage').value = "";
    document.getElementById('lblTipTotal').innerHTML = "TIP TOTAL";
}



