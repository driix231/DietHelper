import { observer } from "mobx-react-lite";
import React from "react";
import BMRCounting from "../../containers/BMRCounting/BMRCounting";
import ResultsDescription from "../../containers/ResultsDescription/ResultsDescription";
import { calculatorBMR } from "../../store/CalculatorBMR/CalculatorBMR";
import { PlanningDietsMainContainer } from "./PlanningDiets.css";

//Wyswietlanie informacji w momencie spelnienia warunku wypelnienia formularza ktory liczy BMR oraz pokazuje jadospis

const PlanningDiets = observer(() => {
    return (
        
        <div>
            {calculatorBMR.resultBMR > 0 ?
                <div>
                    <ResultsDescription /> {/* Jadlospis bedzie renderowany po warunku */}
                </div> :
                <PlanningDietsMainContainer>
                    <BMRCounting /> {/* Formularz jest renderowany na poczatku, po warunku znika */}
                </PlanningDietsMainContainer>
                
            }
        </div>


    )
})

export default PlanningDiets;