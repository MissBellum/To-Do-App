import { useState } from "react";

function Form(props) {
    const [name, setName] = useState("");
    function handleChange(e) {
        setName(e.target.value);
    }
    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    function handleSubmit(e) {
        e.preventDefault();
        // titleCase name
        const titleName = name.trim()
        if ( titleName === "" ) {
            alert("Please type in a task teinksss");
            return;
        }
        // const nameExists = props.names.some((n) => n.toLowerCase() === name.toLowerCase());
        const nameList = Object.values(props.names);
        for ( const label of nameList ) {
            if ( toTitleCase(label) === toTitleCase(titleName) ) {
                alert(`${toTitleCase(titleName)} has been included, try another task diko`);
                return;
            }
        }            
        props.addTask(toTitleCase(name));
        setName(""); 
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
            </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={ name }
                onChange={ handleChange }
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}

export default Form;