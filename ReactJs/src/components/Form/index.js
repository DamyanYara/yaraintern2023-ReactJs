import React, {useMemo,useState} from "react";
import FormInput from "./formInput";
import { StyledForm } from "./style.css";
import { StyledMemo} from "./style.css";
import "./formInput.css";

const Form = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
    });
    const [text, setText] = useState('')

    const inputs = [
    {
        id:1,
        name:"username",
        type: "text",
        placeholder: "Username",
        errorMessage:"Username should be 3-16 characters!",
        label:"Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
       
    },
       { 
        id:2,
        name:"email",
        type: "email",
        placeholder: "Email",
        errorMessage:"It should be a valid Email!",
        label:"Email",
        required: true
    }
    ]


    const handleSubmit = (e) =>{
        e.preventDefault();
       
        setText(`My Name is ${values.username} and my Email is ${values.email}`)
    };

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value});
    };

    console.log(values);
    return(
       
        <div className="form">
            
            <StyledForm onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button>Submit</button> 
            </StyledForm>
           <div>
                {text}
           </div>
        </div>
    ) 
}

export default Form;
// For the Button onClick, then in the handleSubmit function, tell him to display the input 
// Afterwards another button from type button and function to clear the values 