import styled from "styled-components";
import Form from 'react-bootstrap/Form'

export const ItemDropdownContainer = styled.div`
    display: flex;
    text-align: left;
    width: 100%;
    height: 50px;
    flex-direction: column;
    margin-bottom:30px;
`
export const FormControl = styled(Form.Control)`
    width:100%;
    min-height: 43px;
    margin-top: 2px;
    padding: 0px 5px;
    position: relative;
    font-size:16px;
    border-radius: 5px;
    color: black;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid black;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:focus{
        border: none;
        outline: none;
        border-bottom: 1px solid #16B7DA;
        box-shadow: 0 0px 0 0, inset 0 0 0px 9999px #D3DEE6;
    }
    &::placeholder{
        font-size: 13px;
    }
`

export const Pragraph = styled.p`
    flex: 1;
    margin: 0px;
    font-size: 13px;
    display: flex;
    align-items: center;
    font-weight: bold;
`