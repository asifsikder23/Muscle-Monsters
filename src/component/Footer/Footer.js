import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div>
            <footer id="footer" className="bottom-0">
                <div className="bg-dark text-white text-center mt-5 p-3">
                    <div className="footer-social-icon pt-5">
                    <a href="linkedIn.com"><i className="fab fa-linkedin"></i></a>
                    <a href="twitter.com"><i className="fab fa-twitter-square"></i></a>
                    <a href="instagram.com"><i className="fab fa-instagram-square"></i></a>
                    <a href="facebook.com"><i className="fab fa-facebook"></i></a>
                    </div>
                    <div className="footer-menu">
                    <a href="contact">Contact Us</a>
                    <a href="Terms">Terms of Devices</a>
                    <a href="Privacy">Privacy Policy</a>
                    <a href="Sittings">Privacy Settings</a>
                    </div>
                </div>
                <div className="bg-black text-white text-center p-3 pb-1">
                    <p>
                    @Asif Ullah Sikder, All Rights Reserved
                    </p>
                </div>
</footer>
        </div>
    );
};

export default Footer;