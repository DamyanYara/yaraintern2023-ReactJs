import React from "react";
import { StyledFormInput } from "./style.css";
import { StyledLabel } from "./style.css";
import { StyledSpan } from "./style.css";
import "./formInput.css";

const FormInput = (props) => {
    const {label,errorMessage,onChange, id, ...inputProps} = props;
    return (
        <StyledFormInput>
            <StyledLabel>{label}</StyledLabel>
            <input {...inputProps} onChange= {onChange} />
            <StyledSpan>{errorMessage}</StyledSpan>
        </StyledFormInput>
    );
};

export default FormInput