import img1 from "../../assets/images/photo1.jpg"
import img2 from "../../assets/images/photo2.jpg"
import img3 from "../../assets/images/photo3.jpg"

export const HomeData = [
    {
        id: 0,
        textH1: "Zacznij już dziś!",
        textH2: "Oblicz swoje dzienne zapotrzebowanie wypełniając dane w formularzu. Dzięki temu otrzymasz dostęp do diety na każdy dzień tygodnia wraz z produktami, które są potrzebne do przygotowania posiłku.",
        buttonText: "Sprawdz!",
        path: "/planningDiets",
        img: img1,
        download: true,
    },
    {
        id: 1,
        textH1: "Znajdz produkt",
        textH2: "Skorzystaj z wyszukiwarki produktów, dzięki której będziesz mógł wyszukać dowolny produkt i poznać jego składniki odżywcze.",
        buttonText: "Wyszukaj",
        img: img2,
        path: "/add-meal",
        download: false,
    },
    {
        id: 2,
        textH1: "Aplikacja",
        textH2: "Pobierz naszą aplikację już dziś!",
        buttonText: "Pobierz",
        path: "Diethelper.apk",
        img: img3,
        download: true,
    }
]