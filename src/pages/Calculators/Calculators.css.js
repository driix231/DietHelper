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
    width: 90%;
    margin: 50px 220px;
    border: 1px solid;
    text-align:center;
    height:60vh;
    padding: 30px;
    border-radius: 20px;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,212,255,0.08837209302325577) 100%);
    @media screen and (max-width: 768px) {
        width:100%;
        margin-bottom:30px;
        height:100%;
    }
    @media screen and (max-width: 1024px) {
        margin: 50px 50px;
        width:100%;
        margin-bottom:30px;
        height:100%;
    }
`