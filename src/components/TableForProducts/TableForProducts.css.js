import { Button } from "react-bootstrap";
import styled from "styled-components";


export const Tbody = styled.tbody`
    height: 500px;
    overflow-y: scroll;
    cursor:pointer;
    font-size: 15px;
`

export const NewDiv = styled.div`
    
    @media(max-width: 767px){
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    font-size:10px;
    }
`

export const Btn = styled(Button)`
    width: 200px;
    height: 40px;
    @media(max-width: 1199px){
        width: 60px;
        height: 30px;
    }
`