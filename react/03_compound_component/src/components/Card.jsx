import Square from './Square';
import Label from './Label';
import {useState} from 'react';

const Card = () => {

/* React components has a built-in state object.
The state object is where you store property values that 
belong to the component.
When the state object changes, the component re-renders. */
    const [state,setState] = useState({
        color:"red"
    })

    const cardStyle = {
        height:200,
        width:150,
        backgroundColor:"FFFFFF",
        filter:"drop-shadow(0px 0px 5px #666)",
        webkitFilter:"drop-shadow(0px 0px 5px #666)"
    }

    //vaihtaa väriä randomisti
    const onColorChange = () => {
        let color = "#";
        const letters ="ABCDEF0123456789";
        for(let i=0;i<6;i++){
            let temp = Math.floor(Math.random()*16);
            color = color + letters[temp];
        }
        setState({
            color:color
        })
    }

    return (
        <div style={cardStyle}>
            <Square color={state.color}/>
            <Label color={state.color} onColorChange={onColorChange}/>
        </div>
    )
}

export default Card;