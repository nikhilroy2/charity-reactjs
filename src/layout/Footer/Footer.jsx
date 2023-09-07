import React from 'react';
import SocialConnect from './SocialConnect';
import FooterMenu from './FooterMenu';
import FooterAddress from './FooterAddress';
function Footer(props) {
    return (
        <footer>
            <SocialConnect></SocialConnect>
            <FooterMenu></FooterMenu>
            <FooterAddress></FooterAddress>
        </footer>
    );
}

export default Footer;