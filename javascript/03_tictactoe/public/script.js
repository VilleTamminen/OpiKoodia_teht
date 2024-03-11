/*
let spot1 = "";
let spot2 = "";
let spot3 = "";
let spot4 = "";
let spot5 = "";
let spot6 = "";
let spot7 = "";
let spot8 = "";
let spot9 = "";
*/
let spots = ["","","","","","","","",""];
//player goes first
let allowPlayerTurn = 1;
//computer turn randomizer
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//Player has X, computer has O

function playerTurn(i){
    if(spots[i] == ""){
        if(allowPlayerTurn){
            playerSpot(i);
        }
        else{
            console.log("wait for your turn");
        }
    }
    else{
        console.log("choose empty space");
    }
}

function computerTurn(){
    //Shuffle for random spots
let shuffledArray = array.sort((a, b) => 0.5 - Math.random());
console.log("shuffled array: " + shuffledArray);

    //computer favors middle spot and then goes random
    if(spots[4] == ""){
        computerSpot(4);
    }
    else{
        for(i=0;i<9;i++){
            if(spots[shuffledArray[i]] == ""){
                computerSpot(shuffledArray[i]);
                break;
            }
        }
    }   
}

function playerSpot(i){
    allowPlayerTurn = 0;
    spots[i] = "X";
    console.log("player chose spot " + i);
    updateBoard();
    computerTurn();
}

function computerSpot(i){
    spots[i] = "O";
    console.log("computer chose spot " + i);
    updateBoard();
    allowPlayerTurn = 1;
}

function updateBoard(){
    for(i=0;i<9;i++){
        if(spots[i] != ""){
            document.querySelector("#button"+i.toString()).textContent = spots[i];
        }
    }
    checkWinCondition();
}

function checkWinCondition(){
    if(checkWinConditionMark("X")){
        console.log("PLAYER WINS");
    }
    if(checkWinConditionMark("O")){
        console.log("COMPUTER WINS");
    }

    function checkWinConditionMark(mark){
        //Horizontal wins
        if(spots[0] == mark && spots[1] == mark && spots[2] == mark){
            console.log("WIN FOR " + mark);
            return true;
        }
        else if(spots[3] == mark && spots[4] == mark && spots[5] == mark){
            console.log("WIN FOR " + mark);
            return true;
        }
        else if(spots[6] == mark && spots[7] == mark && spots[8] == mark){
            console.log("WIN FOR " + mark);
            return true;
        }
        //Vertical wins
        else if(spots[0] == mark && spots[3] == mark && spots[6] == mark){
            console.log("WIN FOR " + mark);
            return true;
        }
        else if(spots[1] == mark && spots[4] == mark && spots[7] == mark){
            console.log("WIN FOR " + mark);
            return true;
        }
        else if(spots[2] == mark && spots[5] == mark && spots[8] == mark){
            console.log("WIN FOR " + mark);
            return true;
        }
        //Cross wins
        else if(spots[0] == mark && spots[4] == mark && spots[8] == mark){
            console.log("WIN FOR " + mark);
            return true;
        }
        else if(spots[2] == mark && spots[4] == mark && spots[6] == mark){
            console.log("WIN FOR " + mark);
            return true;
        }
    }   
}

function reset(){
    spots = ["","","","","","","","",""];
    console.log("array cleared");
    //Reset board
    for(i=0;i<9;i++){
        document.querySelector("#button"+i.toString()).textContent = "-";
    }
    allowPlayerTurn = 1;
}