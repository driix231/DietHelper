import React from "react";
import { observer } from "mobx-react-lite";
import { products } from "../../store/FoodList/FoodList";
import { Tbody } from "../TableForProducts/TableForProducts.css";
import { CountingKcalContainer, CountingKcalTextCont, TableCountingKcal, DivTable } from "./CountingKcalComp.css";
import { Table } from "react-bootstrap";
import { DivText } from "../../containers/AddMeal/AddMeal.css";

const CountingKcalComp = observer(() => {

    return (
        <CountingKcalContainer>
            <CountingKcalTextCont>
                
                <DivText>Podsumowanie dodanych produktów</DivText></CountingKcalTextCont>
                <DivTable>
            <Table striped bordered hover variant="dark" size="sm">
                <thead>
                    <tr>
                        <th>Kcal</th>
                        <th>Białko</th>
                        <th>Węglowodany</th>
                        <th>Tłuszcz</th>
                        <th>Gramy</th>
                    </tr>
                </thead>
                <Tbody>
                    <tr>
                        <td>{products.kcal}</td>
                        <td>{products.proteins}</td>
                        <td>{products.carbs}</td>
                        <td>{products.fats}</td>
                        <td>{products.eaten}</td>
                    </tr>
                </Tbody>
            </Table>
            </DivTable>
        </CountingKcalContainer>

    )
})

export default CountingKcalComp;