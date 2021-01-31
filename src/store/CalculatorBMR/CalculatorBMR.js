import { makeAutoObservable } from "mobx";


class CalculatorBMR {

    //Zwraca bmr rezultat

    resultBMR = 0;

    constructor() {
        makeAutoObservable(this);
    }

}

export const calculatorBMR = new CalculatorBMR();