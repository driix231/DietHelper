import React, { useState } from "react";
import { BMI, PText, DivText, InputText, CalculatorContainer, SingleFormDiv } from "./Calculators.css";
import { CountingKcalContainer } from "../../components/CountingKcalComp/CountingKcalComp.css";
import Form from "../../components/AllAboutForm/Form/Form";
import Input from "../../components/AllAboutForm/Input/Input";
import { bmrData } from "../../containers/BMRCounting/BMRCountingData";
import Dropdown from "../../components/AllAboutForm/Dropdown/Dropdown";
import { NavItem } from "react-bootstrap";

const Calculators = () => {

    const [bmiResult, setBmiResults] = useState(Number);
    const [whrResult, setWhrResult] = useState(Number);
    const [whtrResult, setWhtrResult] = useState(Number);
    const [nmcResult, setNmcResult] = useState(Number);
    const [lgResult, setLgResult] = useState(Number);

    const bmi = (data) => {
        return setBmiResults(data.weight / (data.height * data.height));
    }

    const whr = (data) => {
        return setWhrResult(data.talia / data.biodra);
    }

    const whtr = (data) => {
        console.log(data);
        return setWhtrResult((data.talia / data.wzrost) * 100)
    }

    const nmc = (data) => {
        data.sex === "Kobieta" ?
            setNmcResult(data.height - 100 - ((data.height - 150) / 2))
            :
            setNmcResult(data.height - 100 - ((data.height - 150) / 4))
    }


    const lg = (data) => {
        return setLgResult((data.węgle * data.indeks) / 100)
    }


    return (
        <>
            <DivText>
                Kalkulatory dietetyczne
            </DivText>
            <CalculatorContainer>
                <SingleFormDiv>
                <h1>Kalkulator WHR</h1>
                    <Form onSubmit={whr} btnText="Sprawdź WHR">
                        <Input name="talia" label="Obwód talii w cm" placeholder="Talia" required={true} />
                        <Input name="biodra" label="Obwód biodra cm" placeholder="Biodra" required={true} />
                    </Form>
                    {whrResult !== 0 ? <p>Twoje WHR wynosi {whrResult.toFixed(2)}</p> : null}
                </SingleFormDiv>
                <SingleFormDiv>
                <h1>Kalkulator WHtR</h1>
                    <Form onSubmit={whtr} btnText="Sprawdź WHTR">
                        <Input name="talia" label="Obwód talii w cm" placeholder="Wpisz obwód talii" required={true} />
                        <Input name="wzrost" label="Wzrost w cm" placeholder="Wpisz swój wzrost" required={true} />
                    </Form>
                    {whtrResult !== 0 ? <p>WHTR wynosi {whtrResult.toFixed(2)}</p> : null}
                </SingleFormDiv>
                <SingleFormDiv>
                <h1>Kalkulator NMC</h1>
                    <Form onSubmit={nmc} btnText="Sprawdź NMC">
                        <Dropdown options={bmrData[0].options} name="sex" label="Wybierz płeć" />
                        <Input name="height" label="Wzrost w cm" placeholder="Wpisz swój wzrost" required={true} />
                    </Form>
                    {nmcResult !== 0 ? <p>NMC wynosi {nmcResult.toFixed(2)}</p> : null}
                </SingleFormDiv>
                <SingleFormDiv>
                <h1>Kalkulator ŁG</h1>
                    <Form onSubmit={lg} btnText="Sprawdź BMI">
                        <Input name="węgle" label="Węglowodany przyswajalne" placeholder="Wartość w gramach" required={true} />
                        <Input name="indeks" label="Indeks Glikemiczny" placeholder="Indeks glikemiczny" required={true} />
                    </Form>
                    {lgResult !== 0 ? <p> Ładunek glikemiczny wynosi {lgResult.toFixed(2)}</p> : null}
                </SingleFormDiv>
                <SingleFormDiv>
                    <h1>Kalkulator BMI</h1>
                    <Form onSubmit={bmi} btnText="Sprawdź BMI">
                        <Input name="weight" label="Waga w kg" placeholder="Wpisz swoją wagę" required={true} />
                        <Input name="height" label="Wysokość" placeholder="Wpisz swój wzrost, np: 1.84" required={true} />
                    </Form>
                    {bmiResult !== 0 ? <p>Twoje BMI wynosi {Math.round(bmiResult)}</p> : null}
                </SingleFormDiv>
            </CalculatorContainer>
            <DivText>

            </DivText>
        </>
    )

}

export default Calculators;