import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer, Btn, H1Text, H2Text, DivSingleContainer, Img, InsideDivSingleContainer } from "./Home.css";
import { HomeData } from "./HomeData";

const Home = () => {
    return (
        <HomeContainer>
            {HomeData.map((item) =>
                <DivSingleContainer>
                    <InsideDivSingleContainer>
                        <H1Text>{item.textH1}</H1Text>
                        <H2Text>{item.textH2}</H2Text>
                        {item.download ?
                            <a href={item.path} target="_blank" rel="noopener noreferrer"><Btn>{item.buttonText}</Btn></a>
                            :
                            <Link to={item.path}><Btn variant="success">{item.buttonText}</Btn></Link>
                        }

                    </InsideDivSingleContainer>
                    <InsideDivSingleContainer>
                        <Img src={item.img} />
                    </InsideDivSingleContainer>
                </DivSingleContainer>
            )}
        </HomeContainer>

    )
}


export default Home;