import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import avatar from '../../assets/img/avatar.png';
import logo from "../../assets/img/netflix-logo@logotyp.us.svg";
import Register from "../Register";
import "./header.scss";


const headerNav = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Movies",
        path: "/movie",
    },
    {
        name: "Tv Shows",
        path: "/tv",
    },
    {
        name: 'My Favorite',
        path:'/favorite'
    }

];

function Header(props) {
    useEffect(() => {
        const shrink = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove("shrink");
            }
        }  
        window.addEventListener('scroll',shrink)
        return () => {
            window.removeEventListener('scroll',shrink)
        }
    },[])

    const path = useLocation();
    const { pathname } = path;
    const headerRef = useRef();
    //lấy index có path trùng với pathname hiện tại
    const activePath = headerNav.findIndex((e) => e.path === pathname);
    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                    <ul className="header__nav">
                        {headerNav.map((e, i) => (
                            <li key={i} className={`${i === activePath ? "active" : ""}`}>
                                <Link to={e.path}>{e.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="auth">
                    <div className="auth__search">
                        <i className="bx bx-search-alt"></i>
                    </div>
                    <div className="auth__bell">
                        <i className="bx bxs-bell"></i>
                    </div>
                    <div className="auth__logo">
                        {/* <Register /> */}
                        <img src={avatar} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Header;
