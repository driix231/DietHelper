import styled from "styled-components";

export const InputContainer = styled.div`
    position:relative;
    margin:20px 0px;
    width: 100%;

`
export const InputComp = styled.input`
    width:100%;
    padding:8px 10px;
    font-size:16px;
    border-radius: 5px;
    color:black;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid black;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:focus{
        border: none;
        outline: none;
        border-bottom: 1px solid ${props => props.theme.colors.color1};
        box-shadow: 0 0px 0 0, inset 0 0 0px 9999px lightgrey;
    }
    &::placeholder{
        font-size: 13.5px;
    }
`

export const Label = styled.label`
    position:absolute;
    top:-20px;
    left:0px;
    font-size:13px;
    letter-spacing: -0.5px;
    font-weight: bold;
    color:gray;	
    pointer-event:none;
    transition: all 0.5s ease-in-out;
        ${InputComp}:focus ~ & {
        top:-12px;
        font-size:12px;
        color: black;
    }
`

export const ErrorDiv = styled.div`
    color: red;
`