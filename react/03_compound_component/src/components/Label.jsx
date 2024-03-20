const Label = (props) => {

    const labelStyle = {
        fontFamily:"sans-serif",
        fontWeight:"bold",
        margin:0,
        paddingLeft:60,
        paddingTop:15
    }
    return (
        //huomaa ero! React: onClick HTML: onclick
        //onColorChange nimi ei tarvi olla sama kuin Card onColorChange funktion, 
        //mutta sitä kutsuessa saman nimen käyttö olisi suotavaa
        <p style={labelStyle} onClick={props.onColorChange}>{props.color}</p>
    )
}

export default Label;