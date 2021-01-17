import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, Btn } from "./Header.css";
import { headerNav } from "./HeaderData";

const Header = () => {

    return (
        <HeaderContainer>
            {headerNav.map((item) => 
                <Link key={item.id} to={item.path}>
                    <Btn variant="info">{item.name}</Btn>
                    </Link>
            )}
        </HeaderContainer>
    )
}

export default Header;