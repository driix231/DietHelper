import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const DivSingleContainer = styled.div`
    display: flex;
    margin: 50px auto;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const InsideDivSingleContainer = styled.div`
    flex: 1;
`

export const H1Text = styled.h1`
    font-size: 70px;
    text-align: left;
    color: #1E8BF0;
    @media(max-width: 767px){
        font-size: 20px;
        text-align:left;
    }
    @media(min-width: 768px) and (max-width: 1199px){
        font-size:40px;
    }
`

export const H2Text = styled.h2`
    font-size: 20px;
    color: gray;
    width: 80%;
    @media(max-width: 767px){
        font-size: 12px;
        text-align:left;
    }
    @media(min-width: 768px) and (max-width: 1199px){
        font-size:15px;
    }
    
`

export const Img = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
    @media(max-width: 767px){
        width: 150px;
        height: 200px;
        border-radius: 20px;
    }
    @media(min-width: 768px) and (max-width: 1199px){
        font-size:15px;
        width: 250px;
        height: 250px;
        border-radius: 50%;
    }
`

export const Btn = styled.button`
    font-size:15px;
    color:white;
    width:200px;
    background-color: #69bb09;
    line-height:2.5rem;
    border-radius:5px;
    border:0;
    transition: all 0.2s;
    &:hover, :focus {
        background: #468200;
}
@media screen and (max-width: 768px) {
    font-size:15px;
    width:130px;
    line-height:2rem;
  }
@media(min-width: 768px) and (max-width: 1199px){
    font-size:20px;
    width:150px;
    line-height:2rem;
}
`