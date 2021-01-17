import styled from "styled-components";

export const CountingKcalContainer = styled.div`
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid;
    flex-direction: column;
    @media(max-width: 767px){
        width:100%
        font-size: 20px;
    }
    @media(min-width: 768px) and (max-width: 1199px){

    }

`

export const CountingKcalTextCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    @media(max-width: 767px){
        font-size: 20px;
        text-align: center;
    }
    

`

export const TableCountingKcal = styled.table`

`

export const DivTable = styled.div`
    width:100%;
    @media(max-width: 767px){
    font-size: 10px;
    text-align: center;
    bottom:200px;
    left:0px;
}   
`
