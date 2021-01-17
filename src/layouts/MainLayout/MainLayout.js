import React from "react";
import Header from "../../components/Header/Header";
import { MainLayoutMargin } from "./MainLayout.css";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <MainLayoutMargin>
                {children}
            </MainLayoutMargin>
        </>
    )
}

export default MainLayout;