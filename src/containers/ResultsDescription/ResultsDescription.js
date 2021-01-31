import { observer } from "mobx-react-lite";
import React from "react";
import { Table } from "react-bootstrap";
import ModalComponent from "../../components/Modal/Modal";
import { calculatorBMR } from "../../store/CalculatorBMR/CalculatorBMR";
import { modalControll } from "../../store/ModalControll/ModalControll";
import { DietContainer, Btn, DivButtons, DietElementsContainer, DietDayNameContainer, SingleDayDiet, SingleDivUnderText, H3Text, SingleMeal, NameOfMeal, Padding } from "./ResultDescription.css";
import { diets } from "./ResultDescriptionData";
import { BsCalendar } from "react-icons/bs";

const ResultsDescription = observer(() => {

    //Wyswietlanie jadlospisu

    const conditionDisplaying = (dietFor) => calculatorBMR.resultBMR > dietFor.minKcal && calculatorBMR.resultBMR < dietFor.maxKcal

    const dietForWeek = diets.map((dietFor) => {
        if (conditionDisplaying(dietFor)) {
            return (
                <DietContainer>
                    <h1>{dietFor.name}</h1>
                    <DietElementsContainer>
                        {dietFor.day.map((days) =>
                            <div>
                                <DietDayNameContainer>
                                    <h1>
                                        {days.name}
                                    </h1>
                                    <BsCalendar />
                                </DietDayNameContainer>
                                <SingleDayDiet>
                                    {days.meals.map((meal) =>
                                        <SingleMeal>
                                            <H3Text>{meal.nameOfMeal}</H3Text>
                                            <SingleDivUnderText>
                                                <NameOfMeal>{meal.name}</NameOfMeal>
                                                <Padding>
                                                    <h4>Składniki:</h4>
                                                    <Padding>
                                                    <Table>
                                                            <thead>
                                                                <tr class="bg-warning">
                                                                    <th>Nazwa</th>
                                                                    <th>Gramy</th>
                                                                </tr>
                                                            </thead>
                                                            {meal.ingredients.map((ingredient) =>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>{ingredient.name}</td>
                                                                        <td>{ingredient.grams}</td>
                                                                    </tr>
                                                                </tbody>
                                                            )}
                                                        </Table>
                                                    </Padding>
                                                    <div>
                                                        <h4>Suma:</h4>
                                                        <Table>
                                                            <thead>
                                                                <tr class="bg-warning">
                                                                    <th>Kcal</th>
                                                                    <th>Białko</th>
                                                                    <th>Węgl</th>
                                                                    <th>Tłuszcz</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{meal.kcal}</td>
                                                                    <td>{meal.proteins}</td>
                                                                    <td>{meal.carbs}</td>
                                                                    <td>{meal.fats}</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </Padding>
                                            </SingleDivUnderText>
                                        </SingleMeal>
                                    )}
                                </SingleDayDiet>
                            </div>
                        )}
                    </DietElementsContainer>
                </DietContainer>
            )
        }
    })

    const dietList = diets.map((dietFor) => {
        if (conditionDisplaying(dietFor)) {
            return (
                <Table>
                    <thead>
                    <tr class="table-warning">
                            <th>Nazwa </th>
                            <th>Porcja</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dietFor.allWeek.map((item) =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.portionName}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            )
        }
    })

    return (
        <DivButtons>
            <Btn onClick={() => modalControll.openModal("demandProducts")}>Sprawdz zaopatrzenie w produkty spożywcze na cały tydzień</Btn>
            <ModalComponent
                hideModal={() => modalControll.hideModal()}
                show={modalControll.isOpenModalName === "demandProducts"}
                header="Produkty które należy posiadać"
                footerComp={<div> </div>}
            >
                {dietList}
            </ModalComponent>

            Twoje zapotrzebowanie kaloryczne wynosi: {calculatorBMR.resultBMR}
            {dietForWeek}
        </DivButtons>
    )
})

export default ResultsDescription;