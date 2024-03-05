import React, { useState } from 'react'
import Modal from 'react-modal';
import RequestModel from '../model/RequestModel';
import { Link } from 'react-router-dom';


const Product = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (event) => {
        event.preventDefault();
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <section class="siteBanner inner_dark_banner inner_banner">
                <div class="container">
                    <div class="row g-4">
                        <div
                            class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center mt-xl-0">
                            <div>
                                <div class="section_content banner_content h-auto">
                                    <img src="images/clean_logo.png" style={{ width: "100%", maxWidth: "400px" }} alt />
                                    <h2 class="mb-3 text-white mt-lg-5">Beyond the
                                        visible
                                        spectrum of clean.</h2>
                                </div>
                                <div class="section_content">
                                    <p class="mb-0 text-white">We help you ensure
                                        every surface in your facility meets the
                                        highest
                                        standards of cleanliness.</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-xl-4 offset-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 mt-xl-0 d-flex align-items-end">
                            <div class="banner_img w-100">
                                <img src="images/product_img.png"
                                    class="img-fluid w-100"
                                    alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--Product section--> */}

            <section class="product_sec">
                <div class="container">
                    <div class="row g-lg-4 g-md-3 g-3">
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="product_card">
                                <img src="images/product_1.png" alt />
                                <div class="product_card_ingo">
                                    <h3 class="mb-3">CleanRead™ Handheld</h3>
                                    <div
                                        class="product_button d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                        <Link to='/product-detail' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                            More</Link>
                                        <a href="#" onClick={openModal}
                                            class="btn btn-outline-primary">Request
                                            a quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="product_card">
                                <img src="images/product_2.png" alt />
                                <div class="product_card_ingo">
                                    <h3 class="mb-3">Surface ATP Detection Swabs</h3>
                                    <div
                                        class="product_button d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                       <Link to='/surface-atp' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                            More</Link>
                                        <a href="#" onClick={openModal}
                                            class="btn btn-outline-primary">Request
                                            a quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="product_card">
                                <img src="images/product_3.png" alt />
                                <div class="product_card_ingo">
                                    <h3 class="mb-3">Aqua ATP Detection Swabs</h3>
                                    <div
                                        class="product_button d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                        <Link to='/aqua-atp' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                            More</Link>
                                        <a href="#" onClick={openModal}
                                            class="btn btn-outline-primary">Request
                                            a quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="product_card">
                                <img src="images/product_4.png" alt />
                                <div class="product_card_ingo">
                                    <h3 class="mb-3">Surface Protein Detection Swabs</h3>
                                    <div
                                        class="product_button d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                          <Link to='/surface-protein' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                            More</Link>
                                        <a href="#" onClick={openModal}
                                            class="btn btn-outline-primary">Request
                                            a quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="product_card">
                                <img src="images/product_5.png" alt />
                                <div class="product_card_ingo">
                                    <h3 class="mb-3">CleanRead<sup>™</sup> Contamination Reporting Software</h3>
                                    <div
                                        class="product_button d-flex align-items-center gap-lg-4 gap-md-3 gap-3">
                                         <Link to='/product-detail' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                            More</Link>
                                        <a href="#" onClick={openModal}
                                            class="btn btn-outline-primary">Request
                                            a quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                class="modal custom_modal"
            >
                <RequestModel closeModal={closeModal} />
            </Modal>

        </div>
    )
}

export default Product