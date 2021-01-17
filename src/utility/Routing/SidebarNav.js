import AddMeal from "../../containers/AddMeal/AddMeal";
import Calculators from "../../pages/Calculators/Calculators";
import Home from "../../pages/Home/Home";
import PlanningDiets from "../../pages/PlanningDiets/PlanningDiets";

export const navigation = [
    {
        id: 0,
        path: "/",
        component: Home
    },
    {
        id: 1,
        path: "/planningDiets",
        component: PlanningDiets,
    },
    {
        id: 2,
        path: "/add-meal",
        component: AddMeal
    },
    {
        id: 3,
        path: "/calculators",
        component: Calculators,
    }
]