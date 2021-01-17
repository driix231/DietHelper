import styled from "styled-components";

export const AddMealMainContainer = styled.div`
    width: 80%;
    margin: 30px auto;
    padding: 40px 0px;
`

export const FooterMainContainer = styled.div`
    width: 100%;
    text-align: center;
`

export const FormContainer = styled.div`
    width: 80%;
    margin: 0 auto;   
`

export const DivText = styled.div`
    text-align:center;
    font-size: 30px;
    margin-bottom: 20px;
    @media(max-width: 767px){
        font-size:19px;
        margin-bottom: 30px;
        }

`

export const ImageContainer = styled.div`
    width: 100%;
    text-align: center;
`

export const Image = styled.img`
    width: 400px;
    height: 220px;
    object-fit: cover;
    border-radius: 20px;
    @media(max-width: 767px){
        width:200px;
        height:100px;
        }
`
