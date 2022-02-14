import React from 'react';
import './pageheader.scss'
import footerBg from '../../assets/img/footer-bg.jpg'
import './pageheader.scss'
function PageHeader(props) {
    return (
        <div className="pageheader" style={{backgroundImage: `url(${footerBg})` }}>
            {props.children}
        </div>
    );
}

export default PageHeader;