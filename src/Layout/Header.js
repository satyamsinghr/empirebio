import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <div>
            {/* <header class="dark_header"> */}
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg p-0">
                                <a className="navbar-brand">
                                    {location.pathname === '/product' ? (
                                        <img src="images/logo_white.png" alt="Logo" />
                                    ) : (
                                        <img src="images/logo.png" alt="Logo" />
                                    )}
                                </a>
                                <button className="navbar-toggler" type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse"
                                    id="navbarSupportedContent">
                                    <ul
                                        className="navbar-nav ms-auto mb-2 gap-lg-5 gap-md-4 gap-3 mb-lg-0">
                                        <li className={`nav-item `}>
                                            <Link to="/product" className={`nav-link px-0 ${location.pathname === '/product' ? 'active' : ''}`} >Products</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-0"
                                                href="#" >About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-0"
                                                href="#" >Resource Center</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-0"
                                                href="#" >Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header