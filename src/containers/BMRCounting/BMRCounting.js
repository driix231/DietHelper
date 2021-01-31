import { observer } from "mobx-react-lite";
import React, { useMemo, useState } from "react";
import Dropdown from "../../components/AllAboutForm/Dropdown/Dropdown";
import Form from "../../components/AllAboutForm/Form/Form";
import Input from "../../components/AllAboutForm/Input/Input";
import { calculatorBMR } from "../../store/CalculatorBMR/CalculatorBMR";
import { bmrData, countingBMR } from "./BMRCountingData";

const BMRCounting = observer(() => {

    //Formularz BMR liczenia i diety na tydzien

    const [bmrItems, setBmrItems] = useState(bmrData);

    const handleSubmit = (data) => {
        const results = countingBMR(data.weight, data.height, data.age, data.sex, data.activity, data.plan);
        calculatorBMR.resultBMR = Math.round(results);
    }
    const memoFormItems = useMemo(() => {
        return bmrItems.map((item) => {
            switch (item.variant) {
                case "input":
                    return <Input
                        key={item.id}
                        name={item.name}
                        label={item.label}
                        type={item.type}
                        required={item.required}
                        placeholder={item.placeholder}
                    />
                case "dropdown":
                    return <Dropdown
                        name={item.name}
                        label={item.label}
                        options={item.options}
                    />
                default:
                    return;
            }
        })
    }, [bmrItems])

    return (
        <Form onSubmit={handleSubmit} btnText="Oblicz">
            {memoFormItems}
        </Form>
    )
})
export default BMRCounting;