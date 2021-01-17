import { makeAutoObservable } from "mobx";
import { foodData } from "../../components/Header/HeaderData";


class FoodListStore {

    foodsData = foodData
    clickedProduct = [];
    countedProduct = {};
    actualProduct = {};
    kcal = 0;
    proteins = 0;
    carbs = 0;
    fats = 0;
    eaten = 0;

    constructor() {
        makeAutoObservable(this);
    }

    countingProduct() {
        this.kcal = 0;
        this.proteins = 0;
        this.carbs = 0;
        this.fats = 0;
        this.eaten = 0;

        const obj = this.clickedProduct.map((item) => {
            this.kcal += item.kcal;
            this.proteins += item.proteins;
            this.carbs += item.carbs;
            this.fats += item.fats;
            this.eaten += Number(item.eaten)
            return {
                kcal: this.kcal,
                proteins: this.proteins,
                carbs: this.carbs,
                fats: this.fats,
                eaten: this.eaten
            }
        })
        this.countedProduct = obj;
    }

    updateProduct(arr) {
        this.clickedProduct = arr;
        this.countingProduct();
    }

    addProduct(item) {
        this.clickedProduct.push(item);
        this.countingProduct();
    }

    addActualProduct(obj) {
        this.actualProduct = obj;
    }

    filterEl(e) {
        let newList = [];
        let currList = [];
        if (e.target.value !== "") {
            currList = this.foodsData;
            newList = currList.filter(item => {
                if (item.name == null) {
                    return null
                } else {
                    const lc = item.name.toLowerCase();
                    const filtr = e.target.value.toLowerCase();
                    return lc.includes(filtr);
                }
            })
        } else {
            newList = foodData;
        }
        this.foodsData = newList;
    }

}

export const products = new FoodListStore();