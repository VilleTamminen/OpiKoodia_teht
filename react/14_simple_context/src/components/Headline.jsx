import { useContext } from "react";
import {ThemeContext} from '../context/ThemeContext';

//komponentti joka käyttää teemaa
const Headline = (props) => {

    const theme = useContext(ThemeContext);

    return (
        <h3 style={{...theme}}>
            {props.children}
        </h3>
    )
}

export default Headline;