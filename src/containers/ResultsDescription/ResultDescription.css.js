import styled from "styled-components";


export const DietContainer = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
    margin:0 auto;
    flex-direction: column;
`

export const DietElementsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const DietDayNameContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    font-size: 40px;
    border-bottom: 2px solid;
    margin: 40px 0px;
`

export const SingleDayDiet = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media(max-width: 767px){
        flex-direction: column;
    }
    @media(min-width: 768px) and (max-width: 1199px){
        flex-direction: column;
    }
`

export const SingleMeal = styled.div`
    border:1px solid black;
    padding: 10px;
`

export const H3Text = styled.h3`
    font-size: 20px;
    color: orange;
    border-bottom:2px solid orange;
    padding: 10px;
`

export const NameOfMeal = styled.div`
    color: #3169D8;
    padding: 5px;
    font-weight: bold;
`

export const Padding = styled.div`
    padding: 30px 0px;
    height: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`

export const SingleDivUnderText = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Btn = styled.button`
    font-size:25px;
    color:white;
    background-color:black;
    line-height:2.5rem;
    border:0;
}
@media screen and (max-width: 768px) {
    font-size:9px;
  }
@media(min-width: 768px) and (max-width: 1199px){
    font-size:20px;
}



`
export const DivButtons = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:center;
`