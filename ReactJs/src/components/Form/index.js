import React, {useState} from "react";
import FormInput from "./formInput";

const Form = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
    });

    const inputs = [
    {
        id:1,
        name:"username",
        type: "text",
        placeholder: "Username",
        label:"Username"
    },
       { 
        id:2,
        name:"email",
        type: "text",
        placeholder: "Email",
        label:"Email"
    }
    ]


    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value});
    };

    console.log(values);
    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
                ))}
                <button>Submit</button>
            </form>
        </div>
    ) 
}

export default Form;