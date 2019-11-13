import React from 'react'
import { ReactComponent as Logo } from '../../Utils/images/logo.svg';
import { ReactComponent as Menu } from '../../Utils/images/hamburger.svg';
import { IconButton } from '@material-ui/core'

function Header(){

    return (
        <div className="header">
            <div className="header--logo">
                <Logo />
            </div>
            <div className="menu header--menu">
                <a className="menu--input" href="tel:2125555555">2125555555</a>
                <p className="menu--input">Login</p>
                <div className="menu--drpdwn">
                    <IconButton disabled>
                        <Menu />
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Header