import { makeAutoObservable } from "mobx";


class CalculatorBMR {

    resultBMR = 0;

    constructor() {
        makeAutoObservable(this);
    }

}

export const calculatorBMR = new CalculatorBMR();