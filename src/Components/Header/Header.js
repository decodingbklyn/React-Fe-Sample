import React from 'react'
import { ReactComponent as Logo } from '../../Utils/images/logo.svg';
import { ReactComponent as Menu } from '../../Utils/images/hamburger.svg';

function Header(){

    return (
        <div className="header">
            <div className="header--logo">
                <Logo />
            </div>
            <div className="menu header--menu">
                <a className="menu--input" href="tel:2125555555">2125555555</a>
                <a className="menu--input" href="#">Login</a>
                <div className="menu--drpdwn">
                    <Menu />
                </div>
            </div>

        </div>
    )
}

export default Header