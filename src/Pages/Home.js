import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>

            <section class="siteBanner home_bg">
                <div class="container position-relative" style={{ zIndex: "9" }}>
                    <div class="row g-4">
                        <div
                            class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center mt-lg-0">
                            <div class="section_content banner_content">
                                <h2 class="mb-lg-4 mb-md-3 mb-3 text-white">Beyond
                                    the visible
                                    spectrum of clean.</h2>
                                <p class="mb-lg-5 mb-md-4 text-white mb-4">We help
                                    you ensure
                                    every surface in your facility meets the highest
                                    standards of cleanliness.</p>
                                <a href="#"
                                    class="btn btn-outline-primary border-white text-white d-inlien-flex align-items-center gap-3"><span class="me-3">Here’s how we do it</span> <svg width="31" height="31"
                                        viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="30.913" width="29.8261"
                                            height="30" rx="7"
                                            transform="rotate(-90 1 30.913)"
                                            stroke="#fff" stroke-width="2" />
                                        <path fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5685 21.3569L11.3559 21.3569C11.0824 21.3569 10.86 21.5793 10.86 21.8528C10.86 22.1263 11.0824 22.3487 11.3559 22.3487L21.765 22.3487C22.0385 22.3487 22.2609 22.1263 22.2609 21.8528L22.2609 11.4438C22.2609 11.1703 22.0385 10.9479 21.765 10.9479C21.4914 10.9479 21.269 11.1703 21.269 11.4438L21.269 20.6548L10.5857 9.97151C10.392 9.77778 10.0782 9.77778 9.88443 9.97151C9.69071 10.1652 9.69071 10.4791 9.88443 10.6728L20.5685 21.3569Z"
                                            fill="#fff" />
                                        <path
                                            d="M20.5685 21.3569L20.9221 21.0033L21.7756 21.8569L20.5685 21.8569L20.5685 21.3569ZM11.3559 21.3569L11.3559 21.8569L11.3559 21.3569ZM11.3559 22.3487L11.3559 22.8487L11.3559 22.3487ZM21.765 22.3487L21.765 21.8487L21.765 22.3487ZM21.269 20.6548L21.769 20.6548L21.769 21.8619L20.9155 21.0084L21.269 20.6548ZM10.5857 9.97151L10.9393 9.61795L10.9393 9.61795L10.5857 9.97151ZM9.88443 9.97151L10.238 10.3251L9.88443 9.97151ZM9.88443 10.6728L10.238 10.3192L10.238 10.3192L9.88443 10.6728ZM20.5685 21.8569L11.3559 21.8569L11.3559 20.8569L20.5685 20.8569L20.5685 21.8569ZM11.3559 21.8569C11.3559 21.8569 11.3569 21.8568 11.3581 21.8563C11.3589 21.856 11.3591 21.8557 11.359 21.8558C11.3588 21.8559 11.3591 21.8557 11.3594 21.8549C11.3599 21.8538 11.36 21.8527 11.36 21.8528L10.36 21.8528C10.36 21.3031 10.8063 20.8569 11.3559 20.8569L11.3559 21.8569ZM11.36 21.8528C11.36 21.8529 11.3599 21.8518 11.3594 21.8507C11.3591 21.8499 11.3588 21.8497 11.359 21.8498C11.3591 21.8499 11.3589 21.8496 11.3581 21.8493C11.3569 21.8488 11.3559 21.8487 11.3559 21.8487L11.3559 22.8487C10.8063 22.8487 10.36 22.4025 10.36 21.8528L11.36 21.8528ZM11.3559 21.8487L21.765 21.8487L21.765 22.8487L11.3559 22.8487L11.3559 21.8487ZM21.765 21.8487C21.765 21.8487 21.764 21.8488 21.7628 21.8493C21.762 21.8496 21.7618 21.8499 21.7619 21.8498C21.762 21.8497 21.7618 21.8499 21.7615 21.8507C21.761 21.8518 21.7609 21.8529 21.7609 21.8528L22.7609 21.8528C22.7609 22.4025 22.3146 22.8487 21.765 22.8487L21.765 21.8487ZM21.7609 21.8528L21.7609 11.4438L22.7609 11.4438L22.7609 21.8528L21.7609 21.8528ZM21.7609 11.4438C21.7609 11.4437 21.761 11.4447 21.7615 11.4459C21.7618 11.4467 21.762 11.4469 21.7619 11.4468C21.7618 11.4467 21.762 11.4469 21.7628 11.4473C21.764 11.4478 21.765 11.4479 21.765 11.4479L21.765 10.4479C22.3146 10.4479 22.7609 10.8941 22.7609 11.4438L21.7609 11.4438ZM21.765 11.4479C21.7649 11.4479 21.7659 11.4478 21.7671 11.4473C21.7679 11.4469 21.7681 11.4467 21.768 11.4468C21.7679 11.4469 21.7681 11.4467 21.7685 11.4459C21.7689 11.4447 21.769 11.4437 21.769 11.4438L20.769 11.4438C20.769 10.8941 21.2153 10.4479 21.765 10.4479L21.765 11.4479ZM21.769 11.4438L21.769 20.6548L20.769 20.6548L20.769 11.4438L21.769 11.4438ZM20.9155 21.0084L10.2321 10.3251L10.9393 9.61795L21.6226 20.3013L20.9155 21.0084ZM10.2321 10.3251C10.2318 10.3248 10.2325 10.3254 10.2337 10.3259C10.2346 10.3262 10.235 10.3262 10.2351 10.3262C10.2351 10.3262 10.2356 10.3262 10.2365 10.3259C10.2377 10.3254 10.2383 10.3248 10.238 10.3251L9.53088 9.61795C9.91986 9.22897 10.5503 9.22897 10.9393 9.61795L10.2321 10.3251ZM10.238 10.3251C10.2377 10.3254 10.2383 10.3247 10.2388 10.3235C10.2391 10.3227 10.2391 10.3222 10.2391 10.3221C10.2391 10.3221 10.2391 10.3216 10.2388 10.3208C10.2383 10.3196 10.2377 10.3189 10.238 10.3192L9.53088 11.0263C9.1419 10.6373 9.1419 10.0069 9.53088 9.61795L10.238 10.3251ZM10.238 10.3192L20.9221 21.0033L20.215 21.7104L9.53088 11.0263L10.238 10.3192Z"
                                            fill="#fff" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div
                            class="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 mt-lg-0 d-flex align-items-end">
                            {/* <!-- <div class="banner_img w-100">
                            <img src="images/banner_img.png"
                                class="img-fluid w-100"
                                alt>
                        </div> --> */}
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
                                                <img src="images/feedback.png" alt />
                                                <h3 class="mb-1 mt-3">Immediate
                                                    Feedback</h3>
                                                <p class="mb-0">Quick results for
                                                    prompt action.</p>
                                            </div>
                                        </div>
                                        <div
                                            class="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div class="page_card">
                                                <img src="images/evidance.png" alt />
                                                <h3 class="mb-1 mt-3">Evidence-Based
                                                    Cleaning</h3>
                                                <p class="mb-0">Data-driven cleaning
                                                    protocols.</p>
                                            </div>
                                        </div>
                                        <div
                                            class="col-lg-4 col-md-4 col-sm-12 col-12">
                                            <div class="page_card">
                                                <img src="images/compre.png" alt />
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
                                <h2
                                    class="mb-lg-4 mb-md-3 mb-3 text-white">Cleanliness
                                    Confirmed.</h2>
                                <p class="mb-lg-4 mb-md-4 mb-4 text-white">Because
                                    “trust me, it’s clean!” doesn’t quiet cut it, in
                                    a hospital.</p>

                                <a href="#"
                                    class="btn btn-outline-primary white_button">Explore
                                    CleanRead</a>
                                <div class="mt-lg-5 mt-md-4 mt-4">
                                    <img src="images/clean_button.png" alt />
                                </div>
                            </div>
                        </div>
                        {/* <!-- <div
                        class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="cleanliness_img">
                            <img src="images/" alt>
                        </div>
                    </div> --> */}
                    </div>
                </div>
            </section>

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
                                    alt />
                                <div class="products_info">
                                    <h3 class="mb-3">CleanRead<sup>™</sup>
                                        Handheld</h3>
                                    <Link to='/product-detail' className="btn btn-outline-primary white_button" onClick={() => window.scrollTo(0, 0)}>Learn
                                        More</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="products_card atp_second">
                                <img src="images/product_pen.png" class="img-fluid"
                                    alt />
                                <div class="products_info">
                                    <h3 class="mb-3">ATP / Protein Test Swabs</h3>
                                    <Link to='/surface-protein' className="btn btn-outline-primary white_button" onClick={() => window.scrollTo(0, 0)}>Learn
                                        More</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="products_card">
                                <img src="images/pc.png" class="img-fluid" alt />
                                <div class="products_info">
                                    <h3 class="mb-3">CleanRead<sup>™</sup> Reporting
                                        Tool</h3>
                                    <Link to='/product-detail' className="btn btn-outline-primary white_button" onClick={() => window.scrollTo(0, 0)}>Learn
                                        More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="about_us">
                <div class="container">
                    <div class="row">
                        <div
                            class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 g-4">
                            <div class="banner_content section_content">
                                <h2>About us</h2>
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-12 col-md-12 col-12 col-12">
                            <div class="banner_content section_content">
                                <p>Empire Bio Diagnostics specializes in developing
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home