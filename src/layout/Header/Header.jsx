import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderMenu from './HeaderMenu';
function Header(props) {
    return (
        <header>
            <HeaderTop></HeaderTop>
            <HeaderMenu></HeaderMenu>
        </header>
    );
}

export default Header;