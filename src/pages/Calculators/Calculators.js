import React, { useState } from "react";
import { DivText, CalculatorContainer, SingleFormDiv } from "./Calculators.css";
import Form from "../../components/AllAboutForm/Form/Form";
import Input from "../../components/AllAboutForm/Input/Input";
import { bmrData } from "../../containers/BMRCounting/BMRCountingData";
import Dropdown from "../../components/AllAboutForm/Dropdown/Dropdown";
import { bmiHelper, lgHelper, whrHelper, whtrHelper } from "./CalculatorHelper";

const Calculators = () => {

    const [bmiResult, setBmiResults] = useState(Number);
    const [whrResult, setWhrResult] = useState(Number);
    const [whtrResult, setWhtrResult] = useState(Number);
    const [nmcResult, setNmcResult] = useState(Number);
    const [lgResult, setLgResult] = useState(Number);

    const [dataFromFormWhr, setDataFromFormWhr] = useState(null);
    const [dataFromFormWhtr, setDataFromFormWhtr] = useState(null);

    const bmi = (data) => {
        const height = data.height / 100;
        return setBmiResults(data.weight / (height * height));
    }

    const whr = (data) => {
        setDataFromFormWhr(data);
        return setWhrResult(data.talia / data.biodra);
    }

    const whtr = (data) => {
        setDataFromFormWhtr(data);
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
                <p>Kalkulator Waist-Hip Ratio określa stosunek obwodu talii do obwodu bioder. Wskaźnik WHR stosuje się jedynie w przypadku osób u których stwierdzono nadwagę, jeśli BMI jest w normie to nie powinno się stosować tego kalkulatora. Otyłość typu „jabłko” oznacza otyłość brzuszną, przez co u osoby wzrasta ryzyko wystąpienia chorób takich jak: cukrzyca typu II, choroby układu krążenia czy nadciśnienie. Natomiast typ „gruszka” jest otyłością pośladkowo-udową i nie ma aż tak dużego ryzyka wystąpienia chorób jak w przypadku otyłości brzusznej.</p>
                    <Form onSubmit={whr} btnText="Sprawdź WHR">
                        <Dropdown options={bmrData[0].options} name="sex" label="Wybierz płeć" />
                        <Input name="talia" label="Obwód talii w cm" placeholder="Talia" required={true} />
                        <Input name="biodra" label="Obwód biodra cm" placeholder="Biodra" required={true} />
                    </Form>
                    {whrResult !== 0 ? <p>Twoje WHR wynosi {whrResult.toFixed(2)}</p> : null}
                    {whrResult !== 0 ? <p>{whrHelper(dataFromFormWhr, whrResult)}</p> : null}
                </SingleFormDiv>
                <SingleFormDiv>
                <h1>Kalkulator WHtR</h1>
                <p>Kalkulator Waist to Height Ratio określa stosunek talii do wzrostu, polega na zmierzeniu obwodu talii w środkowym punkcie między ostatnim wyczuwalnym żebrem a szczytem biodra. To narzędzie pozwala ocenić stać odżywienia, a dzięki temu że jest on mierzony w miejscu talii, czyli tam gdzie gromadzi się najwięcej tkanki tłuszczowej.</p>
                    <Form onSubmit={whtr} btnText="Sprawdź WHTR">
                        <Dropdown options={bmrData[0].options} name="sex" label="Wybierz płeć" />
                        <Input name="talia" label="Obwód talii w cm" placeholder="Wpisz obwód talii" required={true} />
                        <Input name="wzrost" label="Wzrost w cm" placeholder="Wpisz swój wzrost" required={true} />
                    </Form>
                    {whtrResult !== 0 ? <p>WHTR wynosi {whtrResult.toFixed(2)}</p> : null}
                    {whtrResult !== 0 ? <p>{whtrHelper(dataFromFormWhtr, whtrResult)}</p> : null}
                </SingleFormDiv>
                <SingleFormDiv>
                <h1>Kalkulator NMC</h1>
                <p>Kalkulator Należnej Masy Ciała to prosty sposób na określenie optymalnej wagi dla osoby dorosłej, biorąc pod uwagę wzrost i płeć. Jest to pożądana masa ciała, która chroni przed nadwagą i niedowagą.</p>
                    <Form onSubmit={nmc} btnText="Sprawdź NMC">
                        <Dropdown options={bmrData[0].options} name="sex" label="Wybierz płeć" />
                        <Input name="height" label="Wzrost w cm" placeholder="Wpisz swój wzrost" required={true} />
                    </Form>
                    {nmcResult !== 0 ? <p>Idealna masa Twojego ciała to {nmcResult.toFixed(2)}kg</p> : null}
                </SingleFormDiv>
                <SingleFormDiv>
                <h1>Kalkulator ŁG</h1>
                <p>Kalkulator Ładunek Glikemiczny jest głownie przeznaczony dla diabetyków, pozwala on okreslić ilość węglowodanów w posiłku. Szacuje on o ile wzrośnie poziom cukru we krwi osoby po zjedzeniu określonej żywności. Indeks glikemiczny zależy od tego ile węglowodanów jest w pożywieniu. Ładunek glikemiczny jest bardziej miarodajny niż sam indeks glikemiczny, ponieważ uwzględania on ilość węglowodanów w porcji pokarmu, a także szybkość z jaką podnosi on glukozę we krwi.</p>
                    <Form onSubmit={lg} btnText="Sprawdź BMI">
                        <Input name="węgle" label="Węglowodany przyswajalne" placeholder="Wartość w gramach" required={true} />
                        <Input name="indeks" label="Indeks Glikemiczny" placeholder="Indeks glikemiczny" required={true} />
                    </Form>
                    {lgResult !== 0 ? <p> Ładunek glikemiczny wynosi {lgResult.toFixed(2)}</p> : null}
                    {lgResult !== 0 ? <p>{lgHelper(lgResult)}</p> : null}
                </SingleFormDiv>
                <SingleFormDiv>
                    <h1>Kalkulator BMI</h1>
                    <p>Kalkulator Body Mass Index pozwala na proste i szybkie obliczenie wskaźnika masy ciała, polega on na stosunku masy ciała do wzrostu. Zbyt niski wskaźnik wiąże się z zagrożeniami takimi jak niedowaga, która może doprowadzić do różnych chorób, takich jak niedożywienie, niedobory witamin, anemia, problemy wzrostu i rozwoju i ogólne zmniejszenie funkcji odpornościowej. Natomiast zbyt wysoki wynik wiąże się z nadwagą, przez co osoba narażona jest na zagrożenia, na przykład na wysokie ciśnienie krwi, wysoki poziom cholesterolu LDL, choroba wieńcowa serca.</p>
                    <Form onSubmit={bmi} btnText="Sprawdź BMI">
                        <Input name="weight" label="Waga w kg" placeholder="Wpisz swoją wagę" required={true} />
                        <Input name="height" label="Wzrost w cm" placeholder="Wpisz swój wzrost" required={true} />
                    </Form>
                    {bmiResult !== 0 ? <p>Twoje BMI wynosi {Math.round(bmiResult)}</p> : null}
                    {bmiResult !== 0 ? <p>{bmiHelper(bmiResult)}</p> : null}
                    
                </SingleFormDiv>
            </CalculatorContainer>
            <DivText>

            </DivText>
        </>
    )

}

export default Calculators;