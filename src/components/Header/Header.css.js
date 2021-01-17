import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    position: fixed;
    border: 1px solid;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 5;
    @media screen and (max-width: 768px) {
        position:fixed;
        height:60px;
        bottom:0px;
        left:0px;
      }
`
export const Btn = styled.button`
    font-size:25px;
    color:white;
    background-color:black;
    line-height:2.5rem;
    border-radius:5px;
    border:0;
    transition: all 0.2s;
    &:hover, :focus {
        background: #fff;
        color: black;
}
@media screen and (max-width: 768px) {
    font-size:9px;
  }
@media(min-width: 768px) and (max-width: 1199px){
    font-size:20px;
}



`
