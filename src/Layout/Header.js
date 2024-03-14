import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const isProductRoute = () => {
        return (
            location.pathname === '/product' ||
            location.pathname === '/aqua-atp' ||
            location.pathname === '/surface-atp' ||
            location.pathname === '/surface-protein' ||
            location.pathname === '/reporting-software' ||
            location.pathname.startsWith('/product-detail')
        );
    };
    return (
        <div>
            <header className={`${location.pathname === '/contactUs' || location.pathname === '/aqua-atp' || location.pathname === '/surface-atp' || location.pathname === '/reporting-software' || location.pathname === '/surface-protein' || location.pathname === '/product-detail' ? 'white_header' : ''}`}>
                {/* <header> */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg p-0">
                                <Link to='/' className="navbar-brand">
                                    {location.pathname === '/product' || location.pathname === '/' ? (
                                        // <img src="images/logo_white.png" alt="Logo" />
                                        <>
                                            <img src="images/logo_white.png"
                                                class="d-lg-block d-md-block d-none" alt="Logo" />
                                            <img src="images/mobile_logo.png"
                                                class="d-lg-none d-md-none d-block" alt="Logo" />
                                        </>
                                    ) : (
                                        // <img src="images/logo.png" alt="Logo" />
                                        <>
                                            <img src="images/logo.png"
                                                class="d-lg-block d-md-block d-none" alt="Logo" />
                                            <img src="images/mobile_logo.png"
                                                class="d-lg-none d-md-none d-block" alt="Logo" />
                                        </>
                                    )}
                                </Link>
                                <button className="navbar-toggler" type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M13.8 19.2H2.39999M21.6 12H2.39999M21.6 4.79999H2.39999"
                                                stroke="white" stroke-width="2"
                                                stroke-linecap="round" />
                                        </svg></span>
                                </button>
                                <div className="collapse navbar-collapse"
                                    id="navbarSupportedContent">
                                    <ul
                                        className="navbar-nav ms-auto mb-2 gap-lg-5 gap-md-4 gap-0 py-lg-0 px-lg-0 px-md-4 px-3 py-md-4 py-3 mb-lg-0">
                                        <li className={`nav-item `}>
                                            <Link to="/product" className={`nav-link px-0 ${isProductRoute() ? 'active' : ''}`}
                                                style={{ color: location.pathname === '/product' || location.pathname === '/' ? 'white' : '' }}
                                            >Products</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link px-0"
                                                href="#" >About Us</a>
                                        </li> */}
                                        <li className="nav-item">
                                            <a className="nav-link px-0"
                                                style={{ color: location.pathname === '/product' || location.pathname === '/' ? 'white' : '' }}
                                            >Resource Center</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contactUs" className={`nav-link ${location.pathname === '/contactUs' ? 'active' : ''} px-0 `}
                                                style={{ color: location.pathname === '/product' || location.pathname === '/' ? 'white' : '' }}
                                            >Contact Us</Link>
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