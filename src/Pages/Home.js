import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>

            <section class="siteBanner home_bg">
                <div class="container position-relative" style={{ zIndex: "9" }}>
                    <div class="row g-4">
                        <div
                            class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center mt-lg-0">
                            <div class="section_content banner_content">
                                <h2
                                    class="mb-lg-4 mb-md-3 mb-3 text-white">Cleanliness
                                    is absolute,
                                    there are no two ways about it. </h2>
                                <p class="mb-lg-5 mb-md-4 text-white mb-4">We
                                    deliver Cleanliness Verification Solutions to
                                    ensure every surface meets the highest standards
                                    of clean.</p>
                                <a
                                    class="btn btn-outline-primary border-white text-white d-inlien-flex align-items-center gap-3"><span
                                        class="me-3">Explore Our Products</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <rect x="1" y="1" width="29.8261" height="30" rx="7" transform="matrix(1.19249e-08 1 1 -1.19249e-08 1.19249e-08 0.0869751)" stroke="white" stroke-width="2" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5686 10.6432L11.3561 10.6432C11.0825 10.6432 10.8601 10.4208 10.8601 10.1473C10.8601 9.87377 11.0825 9.65137 11.3561 9.65137L21.7651 9.65137C22.0386 9.65137 22.261 9.87377 22.261 10.1473L22.261 20.5563C22.261 20.8299 22.0386 21.0522 21.7651 21.0522C21.4915 21.0522 21.2691 20.8299 21.2691 20.5563L21.2691 11.3453L10.5858 22.0286C10.3921 22.2223 10.0783 22.2223 9.88455 22.0286C9.69083 21.8349 9.69083 21.521 9.88455 21.3273L20.5686 10.6432Z" fill="white" />
                                        <path d="M20.5686 10.6432L20.9222 10.9968L21.7758 10.1432L20.5686 10.1432L20.5686 10.6432ZM22.261 10.1473L21.761 10.1473L22.261 10.1473ZM22.261 20.5563L22.761 20.5563L22.261 20.5563ZM21.2691 11.3453L21.7691 11.3453L21.7691 10.1382L20.9156 10.9917L21.2691 11.3453ZM10.5858 22.0286L10.9394 22.3822V22.3822L10.5858 22.0286ZM9.88455 22.0286L10.2381 21.675L9.88455 22.0286ZM9.88455 21.3273L10.2381 21.6809L10.2381 21.6809L9.88455 21.3273ZM20.5686 10.1432L11.3561 10.1432L11.3561 11.1432L20.5686 11.1432L20.5686 10.1432ZM11.3561 10.1432C11.356 10.1432 11.357 10.1433 11.3582 10.1438C11.359 10.1441 11.3592 10.1444 11.3591 10.1443C11.359 10.1442 11.3592 10.1444 11.3596 10.1452C11.36 10.1463 11.3601 10.1474 11.3601 10.1473L10.3601 10.1473C10.3601 10.697 10.8064 11.1432 11.3561 11.1432L11.3561 10.1432ZM11.3601 10.1473C11.3601 10.1472 11.36 10.1483 11.3596 10.1494C11.3592 10.1502 11.359 10.1504 11.3591 10.1503C11.3592 10.1502 11.359 10.1505 11.3582 10.1508C11.357 10.1513 11.356 10.1514 11.3561 10.1514L11.3561 9.15137C10.8064 9.15137 10.3601 9.59762 10.3601 10.1473L11.3601 10.1473ZM11.3561 10.1514L21.7651 10.1514L21.7651 9.15137L11.3561 9.15137L11.3561 10.1514ZM21.7651 10.1514C21.7651 10.1514 21.7641 10.1513 21.7629 10.1508C21.7621 10.1505 21.7619 10.1502 21.7621 10.1503C21.7622 10.1504 21.7619 10.1502 21.7616 10.1494C21.7611 10.1483 21.761 10.1472 21.761 10.1473L22.761 10.1473C22.761 9.59762 22.3147 9.15137 21.7651 9.15137L21.7651 10.1514ZM21.761 10.1473L21.761 20.5563L22.761 20.5563L22.761 10.1473L21.761 10.1473ZM21.761 20.5563C21.761 20.5564 21.7611 20.5554 21.7616 20.5542C21.7619 20.5534 21.7622 20.5532 21.7621 20.5533C21.7619 20.5534 21.7621 20.5532 21.7629 20.5528C21.7641 20.5523 21.7651 20.5522 21.7651 20.5522L21.7651 21.5522C22.3147 21.5522 22.761 21.106 22.761 20.5563L21.761 20.5563ZM21.7651 20.5522C21.765 20.5522 21.766 20.5523 21.7672 20.5528C21.768 20.5532 21.7682 20.5534 21.7681 20.5533C21.768 20.5532 21.7682 20.5534 21.7686 20.5542C21.7691 20.5554 21.7691 20.5564 21.7691 20.5563L20.7691 20.5563C20.7691 21.106 21.2154 21.5522 21.7651 21.5522L21.7651 20.5522ZM21.7691 20.5563L21.7691 11.3453L20.7691 11.3453L20.7691 20.5563L21.7691 20.5563ZM20.9156 10.9917L10.2323 21.675L10.9394 22.3822L21.6227 11.6988L20.9156 10.9917ZM10.2323 21.675C10.232 21.6754 10.2326 21.6747 10.2338 21.6742C10.2347 21.6739 10.2351 21.6739 10.2352 21.6739C10.2352 21.6739 10.2357 21.6739 10.2366 21.6742C10.2378 21.6747 10.2384 21.6754 10.2381 21.675L9.531 22.3822C9.91998 22.7711 10.5504 22.7711 10.9394 22.3822L10.2323 21.675ZM10.2381 21.675C10.2378 21.6747 10.2384 21.6754 10.2389 21.6766C10.2393 21.6774 10.2393 21.6779 10.2393 21.678C10.2393 21.678 10.2393 21.6785 10.2389 21.6793C10.2384 21.6806 10.2378 21.6812 10.2381 21.6809L9.531 20.9738C9.14201 21.3628 9.14201 21.9932 9.531 22.3822L10.2381 21.675ZM10.2381 21.6809L20.9222 10.9968L20.2151 10.2897L9.531 20.9738L10.2381 21.6809Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div
                            class="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 mt-lg-0 d-flex align-items-end">

                        </div>
                    </div>
                </div>
            </section>

            <section class="testing_bg new_testing d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div
                            class="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 offset-lg-4 offset-xl-6">
                            <div class="beyond_card">
                                <div class="section_content">
                                    <h2 class="mb-lg-4 mb-md-3 mb-3">The Crucial
                                        Role of ATP Testing in Healthcare.</h2>
                                    <p class="mb-lg-5 mb-md-4 mb-4">ATP testing is
                                        vital for maintaining the highest standards
                                        of cleanliness in healthcare settings,
                                        preventing the spread of infections.</p>
                                    <div class="row g-4">
                                        <div
                                            class="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div class="page_card">
                                                <img src="images/feedback.png" alt="" />
                                                <h3 class="mb-1 mt-3">Immediate
                                                    Feedback</h3>
                                                <p class="mb-0">Quick results for
                                                    prompt action.</p>
                                            </div>
                                        </div>
                                        <div
                                            class="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div class="page_card">
                                                <img src="images/evidance.png" alt="" />
                                                <h3 class="mb-1 mt-3">Evidence-Based
                                                    Cleaning</h3>
                                                <p class="mb-0">Data-driven cleaning
                                                    protocols.</p>
                                            </div>
                                        </div>
                                        <div
                                            class="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div class="page_card">
                                                <img src="images/compre.png" alt="" />
                                                <h3 class="mb-1 mt-3">Comprehensive
                                                    Safety</h3>
                                                <p class="mb-0">Ensures environments
                                                    are safe for patients and
                                                    staff.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cleanliness_bg d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div
                            class="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
                            <div class="section_content banner_content pe-lg-4">
                                <div class="mb-lg-5 pb-lg-5 mb-md-4 mb-4">
                                    <img src="images/clean_button.png" alt='' />
                                </div>
                                <h2
                                    class="mb-lg-4 mb-md-3 mb-3 text-white">Cleanliness
                                    Confirmed.</h2>
                                <p class="mb-lg-4 mb-md-4 mb-4 text-white">Because
                                    “trust me, it’s clean!” doesn’t quiet cut it,<br class="d-lg-block d-md-block d-none" />in
                                    a hospital.</p>

                                <a href="#"
                                    class="btn btn-outline-primary white_button">Explore
                                    CleanRead</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section class="feature_products">
                <div class="container">
                    <div class="row">
                        <div
                            class="col-lg-7 col-md-8 col-sm-12 col-12 d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-start">
                            <div class="section_content">
                                <h2 class="m-0">Featured products</h2>
                            </div>
                        </div>
                        <div
                            class="col-lg-5 col-md-4 col-sm-12 col-12 d-flex align-items-center justify-content-lg-end justify-content-md-end justify-content-start">
                            <a href="#" class="btn btn-plain">See all products</a>
                        </div>
                    </div>
                    <div
                        class="row mt-lg-5 mt-md-4 mt-4 pt-lg-2 pt-md-2 g-lg-4 g-md-3 g-3">
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="products_card">
                                <img src="images/feature_img.jpg" class="img-fluid"
                                    alt="" />
                                <div class="products_info">
                                    <h3
                                        class="my-lg-3 my-md-3 mb-lg-3 mb-md-3 mb-3 d-flex align-items-center gap-3 justify-content-between flex-lg-row flex-md-row flex-column"><span>CleanRead<sup>™</sup>
                                            Handheld</span>
                                        <Link to='/product-detail' onClick={() => window.scrollTo(0, 0)}
                                       
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32" height="32"
                                            viewBox="0 0 32 32" fill="none">
                                            <path
                                                d="M12.7571 10.3373C12.2071 10.2873 11.7207 10.6926 11.6707 11.2427C11.6207 11.7927 12.026 12.2791 12.5761 12.3291L12.7571 10.3373ZM20 11.9999L20.9959 11.9093C20.9522 11.4286 20.5713 11.0477 20.0905 11.004L20 11.9999ZM19.6708 19.4238C19.7208 19.9738 20.2072 20.3791 20.7572 20.3291C21.3072 20.2791 21.7125 19.7927 21.6625 19.2427L19.6708 19.4238ZM11.2928 19.2928C10.9023 19.6833 10.9023 20.3165 11.2928 20.707C11.6833 21.0976 12.3165 21.0976 12.707 20.707L11.2928 19.2928ZM12.5761 12.3291L19.9094 12.9958L20.0905 11.004L12.7571 10.3373L12.5761 12.3291ZM19.0041 12.0904L19.6708 19.4238L21.6625 19.2427L20.9959 11.9093L19.0041 12.0904ZM19.2929 11.2928L11.2928 19.2928L12.707 20.707L20.7071 12.707L19.2929 11.2928ZM27.7999 16C27.7999 22.5169 22.5169 27.7999 16 27.7999V29.7999C23.6215 29.7999 29.7999 23.6215 29.7999 16H27.7999ZM16 27.7999C9.48299 27.7999 4.19995 22.5169 4.19995 16H2.19995C2.19995 23.6215 8.37842 29.7999 16 29.7999V27.7999ZM4.19995 16C4.19995 9.48299 9.48299 4.19995 16 4.19995V2.19995C8.37842 2.19995 2.19995 8.37842 2.19995 16H4.19995ZM16 4.19995C22.5169 4.19995 27.7999 9.48299 27.7999 16H29.7999C29.7999 8.37842 23.6215 2.19995 16 2.19995V4.19995Z"
                                                fill="#000552" />
                                        </svg>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="products_card atp_second">
                                <img src="images/product_pen.png" class="img-fluid"
                                    alt="" />
                                <div class="products_info">
                                    <h3
                                        class="my-lg-3 my-md-3 mb-lg-3 mb-md-3 mb-3 d-flex align-items-center gap-3 justify-content-between flex-lg-row flex-md-row flex-column"><span>ATP
                                            / Protein Test Swabs</span>
                                        <Link to='/surface-atp' onClick={() => window.scrollTo(0, 0)}><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32" height="32"
                                            viewBox="0 0 32 32" fill="none">
                                            <path
                                                d="M12.7571 10.3373C12.2071 10.2873 11.7207 10.6926 11.6707 11.2427C11.6207 11.7927 12.026 12.2791 12.5761 12.3291L12.7571 10.3373ZM20 11.9999L20.9959 11.9093C20.9522 11.4286 20.5713 11.0477 20.0905 11.004L20 11.9999ZM19.6708 19.4238C19.7208 19.9738 20.2072 20.3791 20.7572 20.3291C21.3072 20.2791 21.7125 19.7927 21.6625 19.2427L19.6708 19.4238ZM11.2928 19.2928C10.9023 19.6833 10.9023 20.3165 11.2928 20.707C11.6833 21.0976 12.3165 21.0976 12.707 20.707L11.2928 19.2928ZM12.5761 12.3291L19.9094 12.9958L20.0905 11.004L12.7571 10.3373L12.5761 12.3291ZM19.0041 12.0904L19.6708 19.4238L21.6625 19.2427L20.9959 11.9093L19.0041 12.0904ZM19.2929 11.2928L11.2928 19.2928L12.707 20.707L20.7071 12.707L19.2929 11.2928ZM27.7999 16C27.7999 22.5169 22.5169 27.7999 16 27.7999V29.7999C23.6215 29.7999 29.7999 23.6215 29.7999 16H27.7999ZM16 27.7999C9.48299 27.7999 4.19995 22.5169 4.19995 16H2.19995C2.19995 23.6215 8.37842 29.7999 16 29.7999V27.7999ZM4.19995 16C4.19995 9.48299 9.48299 4.19995 16 4.19995V2.19995C8.37842 2.19995 2.19995 8.37842 2.19995 16H4.19995ZM16 4.19995C22.5169 4.19995 27.7999 9.48299 27.7999 16H29.7999C29.7999 8.37842 23.6215 2.19995 16 2.19995V4.19995Z"
                                                fill="#000552" />
                                        </svg>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="products_card">
                                <img src="images/pc.png" class="img-fluid" alt="" />
                                <div class="products_info">
                                    <h3
                                        class="my-lg-0 my-md-0 mb-lg-0 mb-md-0 mb-0 d-flex align-items-center gap-3 justify-content-between flex-lg-row flex-md-row flex-column"><span>CleanRead<sup>™</sup>
                                            Reporting
                                            Software</span>
                                        <Link to='/reporting-software' onClick={() => window.scrollTo(0, 0)}><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32" height="32"
                                            viewBox="0 0 32 32" fill="none">
                                            <path
                                                d="M12.7571 10.3373C12.2071 10.2873 11.7207 10.6926 11.6707 11.2427C11.6207 11.7927 12.026 12.2791 12.5761 12.3291L12.7571 10.3373ZM20 11.9999L20.9959 11.9093C20.9522 11.4286 20.5713 11.0477 20.0905 11.004L20 11.9999ZM19.6708 19.4238C19.7208 19.9738 20.2072 20.3791 20.7572 20.3291C21.3072 20.2791 21.7125 19.7927 21.6625 19.2427L19.6708 19.4238ZM11.2928 19.2928C10.9023 19.6833 10.9023 20.3165 11.2928 20.707C11.6833 21.0976 12.3165 21.0976 12.707 20.707L11.2928 19.2928ZM12.5761 12.3291L19.9094 12.9958L20.0905 11.004L12.7571 10.3373L12.5761 12.3291ZM19.0041 12.0904L19.6708 19.4238L21.6625 19.2427L20.9959 11.9093L19.0041 12.0904ZM19.2929 11.2928L11.2928 19.2928L12.707 20.707L20.7071 12.707L19.2929 11.2928ZM27.7999 16C27.7999 22.5169 22.5169 27.7999 16 27.7999V29.7999C23.6215 29.7999 29.7999 23.6215 29.7999 16H27.7999ZM16 27.7999C9.48299 27.7999 4.19995 22.5169 4.19995 16H2.19995C2.19995 23.6215 8.37842 29.7999 16 29.7999V27.7999ZM4.19995 16C4.19995 9.48299 9.48299 4.19995 16 4.19995V2.19995C8.37842 2.19995 2.19995 8.37842 2.19995 16H4.19995ZM16 4.19995C22.5169 4.19995 27.7999 9.48299 27.7999 16H29.7999C29.7999 8.37842 23.6215 2.19995 16 2.19995V4.19995Z"
                                                fill="#000552" />
                                        </svg>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section class="feature_products">
                <div class="container">
                    <div class="row">
                        <div
                            class="col-lg-7 col-md-8 col-sm-12 col-12 d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-start">
                            <div class="section_content">
                                <h2 class="m-0">Featured products</h2>
                            </div>
                        </div>
                        <div
                            class="col-lg-5 col-md-4 col-sm-12 col-12 d-flex align-items-center justify-content-lg-end justify-content-md-end justify-content-start">
                            <a href="#" class="btn btn-plain">See all products</a>
                        </div>
                    </div>
                    <div
                        class="row mt-lg-5 mt-md-4 mt-4 pt-lg-2 pt-md-2 g-lg-4 g-md-3 g-3">
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="products_card">
                                <img src="images/feature_img.jpg" class="img-fluid"
                                    alt="" />
                                <div class="products_info">
                                    <h3
                                        class="mb-0 d-flex align-items-center gap-3 justify-content-between flex-lg-row flex-md-row flex-column"><span>CleanRead<sup>™</sup>
                                            Handheld</span>
                                        <Link to='/product-detail' onClick={() => window.scrollTo(0, 0)} class="btn btn-plain"><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32" height="32"
                                            viewBox="0 0 32 32" fill="none">
                                            <path
                                                d="M12.7571 10.3373C12.2071 10.2873 11.7207 10.6926 11.6707 11.2427C11.6207 11.7927 12.026 12.2791 12.5761 12.3291L12.7571 10.3373ZM20 11.9999L20.9959 11.9093C20.9522 11.4286 20.5713 11.0477 20.0905 11.004L20 11.9999ZM19.6708 19.4238C19.7208 19.9738 20.2072 20.3791 20.7572 20.3291C21.3072 20.2791 21.7125 19.7927 21.6625 19.2427L19.6708 19.4238ZM11.2928 19.2928C10.9023 19.6833 10.9023 20.3165 11.2928 20.707C11.6833 21.0976 12.3165 21.0976 12.707 20.707L11.2928 19.2928ZM12.5761 12.3291L19.9094 12.9958L20.0905 11.004L12.7571 10.3373L12.5761 12.3291ZM19.0041 12.0904L19.6708 19.4238L21.6625 19.2427L20.9959 11.9093L19.0041 12.0904ZM19.2929 11.2928L11.2928 19.2928L12.707 20.707L20.7071 12.707L19.2929 11.2928ZM27.7999 16C27.7999 22.5169 22.5169 27.7999 16 27.7999V29.7999C23.6215 29.7999 29.7999 23.6215 29.7999 16H27.7999ZM16 27.7999C9.48299 27.7999 4.19995 22.5169 4.19995 16H2.19995C2.19995 23.6215 8.37842 29.7999 16 29.7999V27.7999ZM4.19995 16C4.19995 9.48299 9.48299 4.19995 16 4.19995V2.19995C8.37842 2.19995 2.19995 8.37842 2.19995 16H4.19995ZM16 4.19995C22.5169 4.19995 27.7999 9.48299 27.7999 16H29.7999C29.7999 8.37842 23.6215 2.19995 16 2.19995V4.19995Z"
                                                fill="#000552" />
                                        </svg>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="products_card atp_second">
                                <img src="images/product_pen.png" class="img-fluid"
                                    alt="" />
                                <div class="products_info">
                                    <h3
                                        class="mb-0 d-flex align-items-center gap-3 justify-content-between flex-lg-row flex-md-row flex-column"><span>ATP
                                            / Protein Test Swabs</span>
                                        <Link to='/surface-atp' onClick={() => window.scrollTo(0, 0)} class="btn btn-plain"><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32" height="32"
                                            viewBox="0 0 32 32" fill="none">
                                            <path
                                                d="M12.7571 10.3373C12.2071 10.2873 11.7207 10.6926 11.6707 11.2427C11.6207 11.7927 12.026 12.2791 12.5761 12.3291L12.7571 10.3373ZM20 11.9999L20.9959 11.9093C20.9522 11.4286 20.5713 11.0477 20.0905 11.004L20 11.9999ZM19.6708 19.4238C19.7208 19.9738 20.2072 20.3791 20.7572 20.3291C21.3072 20.2791 21.7125 19.7927 21.6625 19.2427L19.6708 19.4238ZM11.2928 19.2928C10.9023 19.6833 10.9023 20.3165 11.2928 20.707C11.6833 21.0976 12.3165 21.0976 12.707 20.707L11.2928 19.2928ZM12.5761 12.3291L19.9094 12.9958L20.0905 11.004L12.7571 10.3373L12.5761 12.3291ZM19.0041 12.0904L19.6708 19.4238L21.6625 19.2427L20.9959 11.9093L19.0041 12.0904ZM19.2929 11.2928L11.2928 19.2928L12.707 20.707L20.7071 12.707L19.2929 11.2928ZM27.7999 16C27.7999 22.5169 22.5169 27.7999 16 27.7999V29.7999C23.6215 29.7999 29.7999 23.6215 29.7999 16H27.7999ZM16 27.7999C9.48299 27.7999 4.19995 22.5169 4.19995 16H2.19995C2.19995 23.6215 8.37842 29.7999 16 29.7999V27.7999ZM4.19995 16C4.19995 9.48299 9.48299 4.19995 16 4.19995V2.19995C8.37842 2.19995 2.19995 8.37842 2.19995 16H4.19995ZM16 4.19995C22.5169 4.19995 27.7999 9.48299 27.7999 16H29.7999C29.7999 8.37842 23.6215 2.19995 16 2.19995V4.19995Z"
                                                fill="#000552" />
                                        </svg>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="products_card">
                                <img src="images/pc.png" class="img-fluid" alt="" />
                                <div class="products_info">
                                    <h3
                                        class="mb-0 d-flex align-items-center gap-3 justify-content-between flex-lg-row flex-md-row flex-column"><span>CleanRead<sup>™</sup>
                                            Reporting
                                            Software</span>
                                        <Link to='/reporting-software' onClick={() => window.scrollTo(0, 0)} class="btn btn-plain"><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32" height="32"
                                            viewBox="0 0 32 32" fill="none">
                                            <path
                                                d="M12.7571 10.3373C12.2071 10.2873 11.7207 10.6926 11.6707 11.2427C11.6207 11.7927 12.026 12.2791 12.5761 12.3291L12.7571 10.3373ZM20 11.9999L20.9959 11.9093C20.9522 11.4286 20.5713 11.0477 20.0905 11.004L20 11.9999ZM19.6708 19.4238C19.7208 19.9738 20.2072 20.3791 20.7572 20.3291C21.3072 20.2791 21.7125 19.7927 21.6625 19.2427L19.6708 19.4238ZM11.2928 19.2928C10.9023 19.6833 10.9023 20.3165 11.2928 20.707C11.6833 21.0976 12.3165 21.0976 12.707 20.707L11.2928 19.2928ZM12.5761 12.3291L19.9094 12.9958L20.0905 11.004L12.7571 10.3373L12.5761 12.3291ZM19.0041 12.0904L19.6708 19.4238L21.6625 19.2427L20.9959 11.9093L19.0041 12.0904ZM19.2929 11.2928L11.2928 19.2928L12.707 20.707L20.7071 12.707L19.2929 11.2928ZM27.7999 16C27.7999 22.5169 22.5169 27.7999 16 27.7999V29.7999C23.6215 29.7999 29.7999 23.6215 29.7999 16H27.7999ZM16 27.7999C9.48299 27.7999 4.19995 22.5169 4.19995 16H2.19995C2.19995 23.6215 8.37842 29.7999 16 29.7999V27.7999ZM4.19995 16C4.19995 9.48299 9.48299 4.19995 16 4.19995V2.19995C8.37842 2.19995 2.19995 8.37842 2.19995 16H4.19995ZM16 4.19995C22.5169 4.19995 27.7999 9.48299 27.7999 16H29.7999C29.7999 8.37842 23.6215 2.19995 16 2.19995V4.19995Z"
                                                fill="#000552" />
                                        </svg>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="about_us">
                <div class="container">
                    <div class="row g-4">
                        <div
                            class="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 mt-lg-0">
                            <div class="section_content">
                                <h2 class="mb-lg-5 mb-md-4 mb-4">About us</h2>
                                <p class="mb-4 pb-2">Empire Bio Diagnostics
                                    specializes in developing
                                    and manufacturing cleanliness verification tools
                                    like ATP testing devices and swabs, aimed at
                                    providing accurate surface cleanliness
                                    assessments essential for healthcare and other
                                    sectors focused on maintaining high hygiene
                                    standards. With a foundation of quality and
                                    reliability, our products support users in
                                    achieving superior cleanliness protocols,
                                    ensuring health and safety across
                                    environments.</p>
                                <hr class="about_sep m-0" />
                            </div>
                        </div>
                        <div
                            class="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 mt-lg-0 d-flex align-items-center justify-content-center">
                            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                                <div class="logo" >
                                    <img src="images/logo.png" alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home