import React from 'react';
import FooterTop from '../FooterTop/FooterTop';
import FooterBottom from './FooterBottom/FooterBottom';

const Footer = () => {
    return (
        <div className='py-3' style={{backgroundColor : "#0e4c67"}}>
            <FooterTop/>
            <FooterBottom/>
        </div>
    );
};

export default Footer;