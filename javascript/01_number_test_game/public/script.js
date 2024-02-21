
/*
window.onload = function() {
	const form = document.getElementById("form");
	form.addEventListener("guessNumber",guessNumber);
}
*/

let maxNumber = 100;
let minNumber = 1;
let randomNumber = Math.floor(Math.random() * 100);
function reset(){
	//aloita peli alusta
	 randomNumber = Math.floor(Math.random() * 100);
	 maxNumber = 100;
	 minNumber = 1;

}

function guessNumber(number) {
		//virhe syötteet
		if(isNaN(number)){
			alert("Must input numbers");
			console.log("Must input numbers");
			return false;
		}

	//event.preventDefault();
	//let usernumber_input = document.querySelector("#usernumber").value;
	//let usernumber = usernumber_input.value;
	let usernumber_input = number.value;
	console.log("number received on script");

	if(usernumber_input < minNumber || usernumber_input > maxNumber){
		alert("Number must be within range of " + minNumber + "-" + maxNumber);
		console.log("Number must be within range of " + minNumber + "-" + maxNumber);
		return false;
	}
	else {
		if(usernumber_input == randomNumber){
			alert("You won!!! the number was " + randomNumber);
			console.log("You won!!! the number was " + randomNumber);
		}
		if(usernumber_input < randomNumber){
			minNumber = usernumber_input;
			alert("try bigger number");
			console.log("try bigger number");
		}
		if(usernumber_input > randomNumber){
			maxNumber = usernumber_input;
			alert("try lower number");
			console.log("try lower number");
		}
	}
	alert("random number is " + randomNumber + ", max number is " + maxNumber + " ,min number is " + minNumber);
}



