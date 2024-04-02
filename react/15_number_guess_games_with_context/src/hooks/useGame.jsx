import GameContext from "../context/GameContext";
import { useContext } from "react";

const useGame = () => {
    //useContext triggeroituu, kun arvot muuttuu
    return useContext(GameContext);
}

export default useGame;