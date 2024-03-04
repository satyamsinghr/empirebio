import React from 'react'

const Footer = () => {
  return (
      <footer>
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-1 col-md-12 col-sm-12 col-12">
                        <img src="images/footer_logo.png" alt />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 offset-lg-1">
                        <div
                            class="d-flex flex-lg-row gap-lg-5 gap-md-4 gap-3 flex-md-row flex-column footer_nav">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li class="mt-3">
                                    <a href="#">Products</a>
                                </li>
                                <li class="mt-3">
                                    <a href="#">Resource Center</a>
                                </li>
                                <li class="mt-3">
                                    <a href="#">Contact Us</a>
                                </li>
                                <li class="mt-3">
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-12 col-12 offset-lg-1">
                        <div
                            class="d-flex flex-lg-row gap-lg-5 gap-md-4 gap-3 flex-md-row flex-column footer_nav">
                            <h3>Socials</h3>
                            <ul>
                                <li>
                                    <a href="#">LinkedIn</a>
                                </li>
                                <li class="mt-3">
                                    <a href="#">X</a>
                                </li>
                                <li class="mt-3">
                                    <a href="#">Facebook</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12 offset-lg-1">
                        <div
                            class="d-flex flex-lg-column gap-lg-5 gap-md-4 gap-3 flex-md-column flex-column footer_nav">
                            <h3>Privacy policy & Terms of use</h3>
                            <ul>
                                <li>
                                    <a href="#">Copyright 2024 | All Rights Reserved</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer