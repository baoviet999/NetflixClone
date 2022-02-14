import React from 'react';
import PropTypes from 'prop-types';
import footerBg from '../../assets/img/footer-bg.jpg'
import logo from '../../assets/img/netflix-logo@logotyp.us.svg'
import { Link } from 'react-router-dom';
import './footer.scss'
Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div className="footer" style={{ backgroundImage: `url(${footerBg})` }}>
            <div className="footer-content container">
                <div className="footer__logo">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="footer__content__info">
                    <div className="footer__content__contact">
                        <Link to="/">Home</Link>
                        <Link to="/">Audio and Subtitles</Link>
                        <Link to="/">Media Center</Link>
                        <Link to="/">Privacy</Link>
                    </div>
                    <div className="footer__content__contact">
                        <Link to="/">Audio Decription</Link>
                        <Link to="/">Investor Relation</Link>
                        <Link to="/">Legal Notices</Link>
                        <Link to="/">Contact Us</Link>
                    </div>
                    <div className="footer__content__contact">
                        <Link to="/">Help Center</Link>
                        <Link to="/">Jobs</Link>
                        <Link to="/">Cookie Preferent</Link>
                        <Link to="/">Terms of use</Link>
                    </div>
                    <div className="footer__content__contact">
                        <Link to="/">Home</Link>
                        <Link to="/">Audio and Subtitles</Link>
                        <Link to="/">Media Center</Link>
                        <Link to="/">Privacy</Link>
                    </div>
                    <div className="footer__content__contact">
                        <Link to="/">Audio Decription</Link>
                        <Link to="/">Investor Relation</Link>
                        <Link to="/">Legal Notices</Link>
                        <Link to="/">Contact Us</Link>
                    </div>
                    <div className="footer__content__contact">
                        <Link to="/">Home</Link>
                        <Link to="/">Audio and Subtitles</Link>
                        <Link to="/">Media Center</Link>
                        <Link to="/">Privacy</Link>
                    </div>
                </div>
                <div>@ 1997 - 2022 NetFlix, Inc</div>
            </div>
        </div>
    );
}

export default Footer;