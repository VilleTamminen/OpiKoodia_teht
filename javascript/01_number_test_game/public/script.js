
/*
window.onload = function() {
	const form = document.getElementById("form");
	form.addEventListener("guessNumber",guessNumber);
}
*/

let maxNumber = 100;
let minNumber = 1;
let randomNumber = Math.floor(Math.random() * 100 +1);
let guess = 0;

function reset(){
	//aloita peli alusta
	 randomNumber = Math.floor(Math.random() * 100 +1);
	 maxNumber = 100;
	 minNumber = 1;
	 guess = 0;

}

function guessNumber(number) {
		//virhe syötteet
		if(isNaN(number.value)){
			alert("Must input numbers");
			console.log("Must input numbers");
			return false;
		}
		else{
			console.log("input was a number");
		}

	//event.preventDefault();
	//let usernumber_input = document.querySelector("#usernumber").value;
	//let usernumber = usernumber_input.value;
	let usernumber_input = number.value;
	console.log("number received on script");

	if(usernumber_input < minNumber || usernumber_input > maxNumber){
		alert("Number must be within range of " + minNumber + "-" + maxNumber);
		console.log("Number must be within range of " + minNumber + "-" + maxNumber);
	//	return false;
	}
	else {
		guess++;
		if(usernumber_input == randomNumber){
			alert("You won!!! the number was " + randomNumber);
			console.log("You won!!! the number was " + randomNumber);
		}
		if(usernumber_input < randomNumber){
			minNumber = usernumber_input;
			alert("try bigger number. Range " + minNumber + "-" + maxNumber);
			console.log("try bigger number. Range " + minNumber + "-" + maxNumber);
		}
		if(usernumber_input > randomNumber){
			maxNumber = usernumber_input;
			alert("try lower number. Range " + minNumber + "-" + maxNumber);
			console.log("try lower number. Range " + minNumber + "-" + maxNumber);
		}
	}
	//alert("random number is " + randomNumber + ", max number is " + maxNumber + " ,min number is " + minNumber);
}



