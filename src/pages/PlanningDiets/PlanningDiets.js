import { observer } from "mobx-react-lite";
import React from "react";
import Form from "../../components/AllAboutForm/Form/Form";
import BMRCounting from "../../containers/BMRCounting/BMRCounting";
import ResultsDescription from "../../containers/ResultsDescription/ResultsDescription";
import { calculatorBMR } from "../../store/CalculatorBMR/CalculatorBMR";
import { PlanningDietsMainContainer } from "./PlanningDiets.css";

const PlanningDiets = observer(() => {
    return (
        <div>
            {calculatorBMR.resultBMR > 0 ?
                <div>
                    <ResultsDescription />
                </div> :
                <PlanningDietsMainContainer>
                    <BMRCounting />
                </PlanningDietsMainContainer>
            }
        </div>
        
        
    )
})

export default PlanningDiets;