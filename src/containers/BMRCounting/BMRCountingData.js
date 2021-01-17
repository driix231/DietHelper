export const bmrData = [
    {
        id: 0,
        name: "sex",
        label: "Wybierz swoją płeć",
        variant: "dropdown",
        options: [
            {
                id: 0,
                name: "Kobieta"
            },
            {
                id: 1,
                name: "Mężczyzna"
            }
        ]
    },
    {
        id: 1,
        name: "weight",
        label: "Ile ważysz?",
        variant: "input",
        type: "number",
        required: true,
        placeholder: "Waga",
    },
    {
        id: 2,
        name: "height",
        label: "Jaki jest twój wzrost",
        variant: "input",
        type: "number",
        required: true,
        placeholder: "Wzrost"
    },
    {
        id: 3,
        name: "age",
        label: "Ile masz lat?",
        variant: "input",
        type: "number",
        required: true,
        placeholder: "Wiek"
    },
    {
        id: 4,
        name: "activity",
        label: "Jaka jest twoja aktywność?",
        variant: "dropdown",
        options: [
            {
                id: 0,
                name: "Brak aktywności"
            },
            {
                id: 1,
                name: "Umiarkowana",
            },
            {
                id: 2,
                name: "Aktywny"
            },
            {
                id: 3,
                name: "Wysoka aktywność"
            },
            {
                id: 4,
                name: "Wyczynowe"
            }
        ]
    },
    {
        id: 5,
        name: "plan",
        label: "Planuję",
        variant: "dropdown",
        options: [
            {
                id: 0,
                name: "Przytyć"
            },
            {
                id: 1,
                name: "Schudnąć",
            },
            {
                id: 2,
                name: "Utrzymać wagę"
            }
        ]
    }
]
export const countingBMR = (kg, height, age, sex, activity, goal) => {
    const bmr = sex === "Mężczyzna" ?
        66.47 + (13.75 * kg) + (5 * height) - (6.75 * age)
        :
        665.09 + (9.56 * kg) + (1.85 * height) - (4.67 * age)
    const bmrWithActivity = () => {
        switch (activity) {
            case "Brak aktywności":
                return bmr * 1.4;
            case "Umiarkowana":
                return bmr * 1.6;
            case "Aktywny":
                return bmr * 1.75;
            case "Wysoka aktywność":
                return bmr * 2;
            case "Wyczynowe":
                return bmr * 2.2;
            default:
                return;
        }
    }

    switch(goal){
        case "Przytyć":
            const gainWeight = bmrWithActivity();
            return gainWeight + 300;
        case "Schudnąć":
            const loseWeight = bmrWithActivity();
            return loseWeight - 300;
        case "Utrzymać wagę":
            return bmrWithActivity();
        default: 
            return;
    }
}


