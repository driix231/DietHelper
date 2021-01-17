import styled from "styled-components";
import Input from "../../components/AllAboutForm/Input/Input";

export const PText = styled.p`
    width:13%;
    margin:0 auto;
    text-align:left;
    border:1px solid black;
    text-transform: capitalize;
`

export const DivText = styled.div`
    text-align:center;
    font-size: 40px;
`

export const InputText = styled.input`
    display:flex;
    width:200px;
    height:50px;
    border-radius:20px;

`

export const CalculatorContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    margin: 40px auto;
    flex-wrap: wrap;
`

export const SingleFormDiv = styled.div`
    width: 40%;
    margin: 50px 20px;
    border: 1px solid;
    padding: 30px;
    border-radius: 20px;
    @media screen and (max-width: 768px) {
        width:100%;
        margin-bottom:30px;
          }
`