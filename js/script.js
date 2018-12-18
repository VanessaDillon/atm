var username,
	correct_pass = (/^[0-9]{4}$/),
	passTry = 3,
	currentBalance = 50000;

function myFunction(){
    document.getElementById("lbpanel").style.display = "block";
}
function myFunctionnn(){
	document.getElementById("loginbox").style.display = "none";
	document.getElementById("options").style.display = "block";
	
	event.preventDefault;
	
}
function myFunctiontwo(){
	document.getElementById("loginbox").style.display = "block";
	event.preventDefault;
}

// Select what the user wishes to do
function selectFunction() {
	var atmFunctions = parseInt(prompt("Hello, what can we do for you today? \n 1. Check Balance \n 2. Withdrawal \n 3. Deposit \n 4. Exit"));
	if (atmFunctions !== "" && atmFunctions !== null && !isNaN(atmFunctions)) {
		switch (atmFunctions) {
			case 1:
				inquiry();
				break;
			case 2:
				withdrawal();
				break;
			case 3:
				deposit();
				break;
			case 4:
				exit();
				break;
			default:
				alert("Please make a valid selection");
				selectFunction();
		}
	} else {
		alert("Please make a valid selection");
		selectFunction();
	}
}
// checkBalance function
function inquiry() {
	alert("Your current balance is $" + currentBalance);
	toContinue();
}
// Deposit function
function deposit() {
	var depositAmount = parseInt(prompt("How much do you want to deposit?"));
	if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
		currentBalance += depositAmount;
		alert("You have successfully deposited $" + depositAmount + "\n" + "You now have $" + currentBalance);
		toContinue();
	} else {
		alert("Error: please enter a number!");
		deposit();
	}
}
// Withdrawal function
function withdrawal() {
	var withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $1000"));
	if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
		if (withdrawalAmount >= 1000) {
			if (withdrawalAmount <= currentBalance) {
				currentBalance -= withdrawalAmount;
				alert("Your transaction was successful!");
				alert("Your remaining balance is $" + currentBalance);
				toContinue();
			} else {
				alert("You do not have enough funds!");
				withdrawal();
			}
		} else {
			alert("You need to withdraw at least $1000");
			withdrawal();
		}
	} else {
		alert("Error: please enter a number!");
		withdrawal();
	}
}	
// Do you want to continue using?
function toContinue(){
    var yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
	if (yesOrNo !== "" && yesOrNo !== null) {
    	if (yesOrNo === 2){
			exit();
    	}
		else {
			selectAccountType(); 
    	}
	} else {
		alert("Please make a valid selection");
		toContinue();
	}
}
// Exit the ATM
function exit() {
	alert("Thank you for using Bank o Nessa's ATM machine!");
		
}