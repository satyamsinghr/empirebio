import React from 'react'

const ContactUs = () => {
  return (
    <div>
       <section class="siteBanner contact_banner">
            <div class="container">
                <div class="row g-4">
                    <div
                        class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-start">
                        <div class="section_content banner_content h-auto">
                            <h2 class="mb-lg-5 mb-md-4 mb-4">Contact us</h2>
                            <p class="mb-lg-5 mb-md-4 mb-4">280 Duffy Avenue
                                Hicksville, NY 11801</p>
                            <p class="mb-2">Toll Free: 1 (833) 455-7700</p>
                            <p class="mb-2">Local: 1 (516) 696-0822</p>
                            <p class="mb-0">Fax: (516) 248-6456</p>
                            <p class="mt-lg-5 mt-md-4 mt-4">info@ebdny.com</p>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.970117587308!2d-73.54450302415447!3d40.76268197138597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c280db7c6b03c7%3A0x4a737b3230bf3a54!2s280%20Duffy%20Ave%2C%20Hicksville%2C%20NY%2011801%2C%20USA!5e0!3m2!1sen!2sin!4v1709547317450!5m2!1sen!2sin"
                                width="100%" height="505" style={{border:"0"}}
                                allowfullscreen loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">

                        <form action class="form_field">
                            <div class="row">
                                <div
                                    class="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <label
                                        for="exampleFormControlInput1"
                                        class="form-label mb-1">Your
                                        name <span>*</span></label>
                                    <input type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="First name" />
                                </div>
                                <div
                                    class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-end mt-lg-0 mt-md-0 mt-3">
                                    <input type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Last name" />
                                </div>
                                <div
                                    class="col-12 mt-3">
                                    <label
                                        for="exampleFormControlInput1"
                                        class="form-label mb-1">Email
                                        address <span>*</span></label>
                                    <input type="email"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Type in your company email ID" />
                                </div>
                                <div
                                    class="col-12 mt-3">
                                    <label
                                        for="exampleFormControlInput1"
                                        class="form-label mb-1">Phone
                                        <span>*</span></label>
                                    <input type="tel"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder />
                                </div>
                                <div
                                    class="col-12 mt-3">
                                    <label
                                        for="exampleFormControlInput1"
                                        class="form-label mb-1">Organization
                                        <span>*</span></label>
                                    <input type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder />
                                </div>
                                <div
                                    class="col-12 mt-3">
                                    <label
                                        for="exampleFormControlInput1"
                                        class="form-label mb-1">Message
                                        <span>*</span></label>

                                    <textarea class="form-control"
                                        cols="30"
                                        rows="10"></textarea>
                                </div>
                                <div
                                    class="col-12 mt-lg-4 d-flex flex-lg-row gap-3 flex-md-row flex-column-reverse pt-lg-3 mt-md-4 mt-md-4 mt-4">
                                    <button
                                        class="btn btn-primary outline-dark py-3 px-4">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactUs