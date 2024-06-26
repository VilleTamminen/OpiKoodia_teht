import { useState } from 'react';
import GameContext from './GameContext';
import {useNavigate} from 'react-router-dom';

const Gameprovider = (props) => {

    const [state,setState] = useState({
        playerName:"",
        noOfGuesses:0,
        minGuess:1,
        maxGuess:100,
        targetNumber:0,
        message:""
    })

    const navigate = useNavigate();

    const startGame = (name) => {
        if(!name){
            setState((state) => {
                return {
                    ...state,
                    message:"Please enter your name"
                }
            })
            return;
        }
        const target = Math.floor(Math.random()*100)+1;
        const message = "Hello "+name+". Guess a number between "+state.minGuess+" and "+state.maxGuess+".";
        setState((state) => {
            return {
                ...state,
                name:name,
                message:message,
                targetNumber:target
            }
        })
        navigate("/game")
    }

    const guess = (guess) => {
        //jos on manuaalisesti menty /game routeen, lähetä takaisin
        if(!state.targetNumber === 0){
            setState({
                playerName:"",
                noOfGuesses:0,
                minGuess:1,
                maxGuess:100,
                targetNumber:0,
                message:""
            })
            navigate("/")
        }
        //jos ei ole numero
        if(isNaN(guess)){
            let message = "Please enter a NUMBER between"+state.minGuess+" and "+state.maxGuess+".";
            setState((state) => {
                return {
                    ...state,
                    message:message
                }
            })
            return;
        }

        //joissain selaimissa userinput numero saattaa olla string. siksi parseInt.
        let tempGuess = parseInt(guess,10);

        if(tempGuess < state.minGuess || tempGuess > state.maxGuess) {
            let message = "Please enter a number between"+state.minGuess+" and "+state.maxGuess+".";
            setState((state) => {
                return {
                    ...state,
                    message:message
                }
            })
            return;
        }
        if(tempGuess < state.targetNumber && tempGuess >= state.minGuess){
            let message = "You guessed too low. Guess between "+guess+" and "+state.maxGuess+".";
            setState((state) => {
                return {
                    ...state,
                    noOfGuesses:state.noOfGuesses+1,
                    minGuess:guess,
                    message:message
                }
            })
            return;
        }
        if(tempGuess > state.targetNumber && tempGuess <= state.maxGuess){
            let message = "You guessed too high. Guess between "+state.minGuess+" and "+guess+".";
            setState((state) => {
                return {
                    ...state,
                    noOfGuesses:state.noOfGuesses+1,
                    maxGuess:guess,
                    message:message
                }
            })
            return;
        }
        if(tempGuess === state.targetNumber){
            let noOfGuesses = state.noOfGuesses+1;
            alert("Congrats "+state.playerName+"!You won with "+state.noOfGuesses+" guesses.");
            setState({
                    playerName:"",
                    noOfGuesses:0,
                    minGuess:1,
                    maxGuess:100,
                    targetNumber:0,
                    message:""
                })
            navigate("/");
            return;
        }
        console.log("Should no come here!");
    }

    //value = tavarat jotka viedään ulos.
    return (
        <GameContext.Provider value={{
            startGame:startGame,
            guess:guess,
            message:state.message
        }}>
            {props.children}
        </GameContext.Provider>
    )

}

export default Gameprovider;