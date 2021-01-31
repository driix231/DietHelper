import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Label, InputComp, InputContainer, ErrorDiv } from "./Input.css";

//UNIWERSALNY INPUT

const Input = ({ label, name, type = "text", required, validation, value, placeholder }) => {
    const { register, errors } = useFormContext();

    return (
        <InputContainer>
            <InputComp
                name={name}
                ref={register(validation || { required: !!required })}
                type={type}
                value={value}
                placeholder={placeholder}
            />
            <Label>{label}</Label>
            <ErrorDiv>
                {errors[name] && <i>{errors[name].message}</i>}
            </ErrorDiv>
        </InputContainer>
    )
}

export default Input;