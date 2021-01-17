import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Table } from "react-bootstrap";
import { products } from "../../store/FoodList/FoodList";
import { Tbody, NewDiv } from "./TableForProducts.css";

const TableForProducts = observer(({ arr, written }) => {

    const deleteProduct = (id) => {
        const filterData = arr.filter(i => i.id !== id);
        products.updateProduct(filterData);
    }

    return (
        <NewDiv>
        <Table responsive striped bordered hover size="sm">
            <thead>
            <tr className="table-warning">
                    <th>Produkt</th>
                    <th>Kalorie</th>
                    <th>Białko</th>
                    <th>Węglowodany</th>
                    <th>Tłuszcz</th>
                    {written ? <>
                        <th>Gramy</th>
                    </>
                        :
                        null}
                </tr>
            </thead>
            <Tbody>
                {arr.map((item) =>
                    <tr onClick={() => products.addActualProduct(item)}>
                        <td>{item.name}</td>
                        <td>{item.kcal}</td>
                        <td>{item.proteins}</td>
                        <td>{item.carbs}</td>
                        <td>{item.fats}</td>
                        {written ? <>
                            <td>{item.eaten}</td>
                            <td><Button onClick={() => deleteProduct(item.id)}>Usuń</Button></td>
                        </>
                            : null}
                    </tr>
                )}
            </Tbody>
        </Table>
        </NewDiv>
    )
});

export default TableForProducts;