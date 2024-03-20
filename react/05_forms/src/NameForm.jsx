import { useState } from 'react'

const NameForm = (props) => {

    const [state,setState] = useState({
        firstname:"",
        lastname:""
    })

    //... are called spread attributes which, as the name represents, 
    //it allows an expression to be expanded.
    const onChange = (event) => {
        setState((state) => {
            return {
                ...state,
                [event.target.name]:event.target.value
            }
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const name = state.firstname + " " + state.lastname;
        props.setGreeting(name);
        setState({
            firstname:"",
            lastname:""
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='firstname'>First Name</label>
            <input type='text'
                    name='firstname'
                    id='firstname'
                    onChange={onChange}
                    value={state.firstname}/>
            <br/>
            <label htmlFor='lastname'>Last Name</label>
            <input type='text'
                    name='lastname'
                    id='lastname'
                    onChange={onChange}
                    value={state.lastname}/>
            <br/>
            <input type='submit' value="Greet"/>
        </form>
    )

}

export default NameForm;
