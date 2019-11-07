import React from 'react'
import { ReactComponent as Logo } from '../../Utils/imgs/logo.svg';
import { ReactComponent as Menu } from '../../Utils/imgs/hamburger.svg';

function Header(){

    return (
        <div className="header">
            <div className="header--logo">
                <Logo />
            </div>
            <div className="menu header--menu">
                <div className="menu--input">212.555.5555</div>
                <div className="menu--input">Login</div>
                <div className="menu--drpdwn">
                    <Menu />
                </div>
            </div>

        </div>
    )
}

export default Header