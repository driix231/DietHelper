export const whrHelper = (data, whrResult) => {
    if (data.sex === "Kobieta" && whrResult >= 0.8) {
        return "Otyłość typu jabłko"
    } else if (data.sex === "Kobieta" && whrResult < 0.8) {
        return "Otyłość typu gruszka"
    }
    else if (data.sex === "Mężczyzna" && whrResult >= 1) {
        return "Otyłość typu jabłko"
    } else if (data.sex === "Mężczyzna" && whrResult < 1) {
        return "Otyłość typu gruszka"
    }
}

export const whtrHelper = (data, whrResult) => {
    if (data.sex === "Kobieta" && whrResult > 58) {
        return "Oznacza to otyłość"
    } else if (data.sex === "Kobieta" && whrResult > 54 && whrResult <= 58) {
        return "Oznacza to poważną nadwagę"
    }
    else if (data.sex === "Kobieta" && whrResult > 49 && whrResult <= 54) {
        return "Oznacza to nadwagę"
    }
    else if (data.sex === "Kobieta" && whrResult > 46 && whrResult <= 49) {
        return "Oznacza to prawidłową masę ciała"
    }
    else if (data.sex === "Kobieta" && whrResult > 42 && whrResult <= 46) {
        return "Oznacza to lekka niedowagę"
    }
    else if (data.sex === "Kobieta" && whrResult > 35 && whrResult <= 42) {
        return "Oznacza to niedowagę"
    }
    else if (data.sex === "Kobieta" && whrResult <= 35) {
        return "Oznacza to niedożywienie"
    }



    else if (data.sex === "Mężczyzna" && whrResult > 63) {
        return "Oznacza to otyłość"
    } else if (data.sex === "Mężczyzna" && whrResult > 58 && whrResult <= 63) {
        return "Oznacza to poważną nadwagę"
    }
    else if (data.sex === "Mężczyzna" && whrResult > 53 && whrResult <= 58) {
        return "Oznacza to nadwagę"
    }
    else if (data.sex === "Mężczyzna" && whrResult > 46 && whrResult <= 53) {
        return "Oznacza to prawidłową masę ciała"
    }
    else if (data.sex === "Mężczyzna" && whrResult > 43 && whrResult <= 46) {
        return "Oznacza to lekka niedowagę"
    }
    else if (data.sex === "Mężczyzna" && whrResult > 35 && whrResult <= 43) {
        return "Oznacza to niedowagę"
    }
    else if (data.sex === "Mężczyzna" && whrResult <= 35) {
        return "Oznacza to niedożywienie"
    }
}

export const bmiHelper = (bmiResult) => {

    if (bmiResult < 16) {
        return "Oznacza to wygłodzenie, twoja masa ciała jest zbyt niska"
    } else if (bmiResult >= 16 && bmiResult <= 16.9) {
        return "Oznacza to wychudzenie, twoja masa ciała jest zbyt niska"
    }
    else if (bmiResult > 17 && bmiResult <= 18.5) {
        return "Oznacza to niedowagę, wprowadź do swojej diety więcej zdrowych tłuszczy i węglowodanów złożonych"
    }
    else if (bmiResult > 18.5 && bmiResult <= 24.9) {
        return "Twoja masa ciała jest prawidłowa."
    }
    else if (bmiResult > 25 && bmiResult <= 29.9) {
        return "Oznacza to nadwagę, zastanów się nad modyfikacją stylu życia"
    }
    else if (bmiResult > 29.9 && bmiResult <= 34.9) {
        return "Oznacza to otyłość I Stopnia, twoja masa ciała jest zbyt wysoka. Jesteś narażony na zagrożenia, na przykład na wysokie ciśnienie krwi, wysoki poziom cholesterolu LDL, choroba wieńcowa serca. Wprowadź do planu dnia więcej spacerów"
    }
    else if (bmiResult > 35 && bmiResult <= 39.9) {
        return "Oznacza to otyłość II Stopnia, jesteś narażony na zagrożenia, na przykład na wysokie ciśnienie krwi, wysoki poziom cholesterolu LDL, choroba wieńcowa serca. Skontaktuj się z lekarzem który pomoże Ci zaplanować dietę i wprowadz do planu dnia codzienny ruch."
    }else if (bmiResult > 40) {
        return "Oznacza to otyłość III Stopnia, jesteś narażony na zagrożenia, na przykład na wysokie ciśnienie krwi, wysoki poziom cholesterolu LDL, choroba wieńcowa serca. Skontaktuj się z lekarzem który pomoże Ci zaplanować dietę i wprowadz do planu dnia codzienny ruch.";
    }

}

export const lgHelper = (lgResult) => {
    if (lgResult < 10) {
        return "Ładunek glikemiczny jest niski"
    } else if (lgResult >= 10 && lgResult <= 19) {
        return "Ładunek glikemiczny jest średni"
    }
    else if (lgResult > 19) {
        return "Ładunek glikemiczny jest wysoki"
    }
}