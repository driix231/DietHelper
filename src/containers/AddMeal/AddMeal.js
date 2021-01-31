import React from "react";
import { observer } from "mobx-react-lite";
import { products } from "../../store/FoodList/FoodList";
import ModalComponent from "../../components/Modal/Modal";
import { modalControll } from "../../store/ModalControll/ModalControll";
import Form from "../../components/AllAboutForm/Form/Form";
import Input from "../../components/AllAboutForm/Input/Input";
import TableForProducts from "../../components/TableForProducts/TableForProducts";
import { currentlyValuesOfFood } from "./AddMealData";
import CountingKcalComp from "../../components/CountingKcalComp/CountingKcalComp";
import { Button } from "react-bootstrap";
import { DivText } from "./AddMeal.css";
import { AddMealMainContainer, FooterMainContainer, FormContainer, Image, ImageContainer } from "./AddMeal.css";
import photo from "../../assets/images/photo4.jpg";

const AddMeal = observer(() => {

    const onSubmit = (data) => {
        /*
            Wysyłanie danych produktu przechwytywanie aktualnego produktu wybranego w modalu
            oraz liczenie rezultatow
        */
        modalControll.hideModal();
        const choosedProduct = { ...products.actualProduct };
        const convertValues = currentlyValuesOfFood(choosedProduct, data.eaten);
        const eaten = products.actualProduct = {
            ...convertValues, eaten: data.eaten
        }
        products.addProduct(eaten);
    }

    const footerModal = (
        <FooterMainContainer>
            <div>{products.actualProduct.name}</div>
            <FormContainer>
                <div>{products.actualProduct.kcal} kcal/100g</div>
                <Form btnText="Zapisz" onSubmit={onSubmit}>
                    <div>
                        <Input
                            name="eaten"
                            placeholder="Wprowadz liczbę gramów"
                            label="Gramy"
                            type="number"
                            required={true}
                        />
                    </div>
                </Form>
            </FormContainer>
            <div>

            </div>
        </FooterMainContainer>
    )


    /* 
        Caly ten komponent sluzy do wyswietlania rezultatow wybranych produktow, sluzy do odpalania modala i wpisywania
        produktow
    */

    return (
        <AddMealMainContainer>
            <ImageContainer>
                <Image src={photo} />
            </ImageContainer>

            <ModalComponent
                hideModal={() => modalControll.hideModal()}
                show={modalControll.isOpenModalName === "addMeal"}
                header="Wprowadz posiłek"
                footerComp={footerModal}
            >
                Wyszukaj
                <input type="text"onChange={(e) => products.filterEl(e)} /> {/* Ta funkcja do filtrowania i szukania produktow w modlu */}
                <TableForProducts arr={products.foodsData} />
            </ModalComponent>
            <DivText>
                Wyszukaj informacje o produkcie<br />
                <Button onClick={() => modalControll.openModal("addMeal")}>Wyszukaj posiłek</Button></DivText>
            {products.clickedProduct.length !== 0 ?
                <>
                    <div>

                        <TableForProducts arr={products.clickedProduct} written />
                    </div>
                    <div>
                        <CountingKcalComp />
                    </div>

                </>
                :
                null
            }
        </AddMealMainContainer>
    )
})

export default AddMeal;