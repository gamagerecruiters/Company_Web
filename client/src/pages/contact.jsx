import React from "react";

const Contact = () => {
    return (
        <>
            <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[400px] bg-[url('https://tecdn.b-cdn.net/img/new/standard/city/078.jpg')]">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
                    <div className="flex h-full items-center justify-center">
                        <div className="px-6 text-center text-white md:px-12">
                            <h1 className="mt-6 mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl uppercase">
                                Hello! <br />
                                <h2 className="mt-10 mb-16 text-xl tracking-tight md:text-lg xl:text-xl">
                                    <p>We love to hear from you</p>
                                </h2>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <section
                className="mt-5 elementor-section elementor-top-section elementor-element elementor-element-d70a1c2 get-in-touch-class 
          elementor-section-content-top elementor-section-boxed elementor-section-height-default 
          elementor-section-height-default"
                data-id="d70a1c2"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="flex flex-wrap">
                    {/* Column 1 */}
                    <div
                        className="w-full sm:w-1/2 md:w-1/3 p-4 animate__fadeInRight bg-blue-700"
                        data-id="33127e8"
                        data-element_type="column"
                        data-settings='{"animation":"fadeInRight","background_background":"classic"}'
                    >
                        <div className=" mb-4 ">
                            <p className="flex items-center justify-center md:justify-start ml-5 text-xl text-white font-bold">
                                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
                                </svg>
                                Address</p>
                        </div>
                        <div className="mb-4">
                            <div className="border-t border-gray-300">
                                <p className="text-lg ml-5 mt-5 text-white flex items-center mb-2">
                                    Gamage Recruiters Pvt Ltd, <br />
                                    676/1 Colombo - <br />
                                    Galle Main Rd, <br />
                                    Panadura, <br />
                                    Sri Lanka
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}

                    <div
                        className="w-full sm:w-1/2 md:w-1/3 p-4 animate__fadeInRight bg-white"
                        data-id="33127e8"
                        data-element_type="column"
                        data-settings='{"animation":"fadeInRight","background_background":"classic"}'
                    >
                        <div className=" mb-4 ">
                            <p className="gap-1 flex items-center justify-center md:justify-start ml-5 text-xl text-black font-bold">
                                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4697 3.46967C15.7626 3.17678 16.2374 3.17678 16.5303 3.46967L18 4.93935L19.4697 3.46969C19.7626 3.17679 20.2374 3.17679 20.5303 3.46969C20.8232 3.76258 20.8232 4.23745 20.5303 4.53035L19.0607 6.00001L20.5303 7.46965C20.8232 7.76255 20.8232 8.23742 20.5303 8.53031C20.2374 8.82321 19.7625 8.82321 19.4697 8.53031L18 7.06067L16.5303 8.53033C16.2375 8.82322 15.7626 8.82322 15.4697 8.53033C15.1768 8.23744 15.1768 7.76256 15.4697 7.46967L16.9393 6.00001L15.4697 4.53033C15.1768 4.23744 15.1768 3.76256 15.4697 3.46967Z" fill="#000000"></path> <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" fill="#000000"></path> </g></svg>
                                Phone</p>
                        </div>
                        <div className="mb-4">
                            <div className="border-t border-gray-700"></div>
                        </div>
                        <ul className="list-none">
                            <li className="flex items-center mb-2">
                                <span className="mr-2">
                                    <i aria-hidden="true" className="fas fa-phone"></i>
                                </span>
                                <span>
                                    <a
                                        href="tel:077 479 5371"
                                        className="text-blue-700 hover:text-blue-400 text-lg"
                                    >
                                        +9477 479 5371
                                    </a>
                                </span>
                            </li>


                        </ul>
                        <div className=" mb-4 ">
                            <p className="gap-1 flex items-center justify-center md:justify-start ml-5 text-xl text-black font-bold">
                                <svg height="32px" width="32px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083 h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92 c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87 C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024 c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674 l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469 c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599 C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92 c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92 C462.107,387.195,462.94,397.75,456.948,404.771z"></path> </g> </g></svg>
                                Email</p>
                        </div>
                        <div className="mb-4">
                            <div className="border-t border-gray-400"></div>
                        </div>
                        <ul className="list-none">
                            <li className="flex items-center mb-2">
                                <span className="mr-2">
                                    <i aria-hidden="true" className="far fa-envelope"></i>
                                </span>
                                <span>
                                    <a
                                        href="http://localhost:5173/gamagerecruiters@gmail.com "
                                        className="text-lg text-blue-700 hover:text-blue-400"
                                    >
                                        gamagerecruiters@gmail.com
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div
                        className="w-full sm:w-1/2 md:w-1/3 p-4 animate__fadeInRight bg-blue-700"
                        data-id="33127e8"
                        data-element_type="column"
                        data-settings='{"animation":"fadeInRight","background_background":"classic"}'
                    >
                        <div className="ml-5 mb-4">
                            <p className="gap-1 flex items-center justify-center md:justify-start ml-5 text-xl text-white font-bold">
                                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.85 6 18.85H6.76C7.56 18.85 8.32 19.16 8.88 19.72L10.59 21.41C11.37 22.18 12.64 22.18 13.42 21.41L15.13 19.72C15.69 19.16 16.46 18.85 17.25 18.85H18C19.66 18.85 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12.28 14.96C12.13 15.01 11.88 15.01 11.72 14.96C10.42 14.51 7.5 12.66 7.5 9.51C7.51 8.12 8.62 7 10 7C10.82 7 11.54 7.39 12 8C12.46 7.39 13.18 7 14 7C15.38 7 16.5 8.12 16.5 9.51C16.49 12.66 13.58 14.51 12.28 14.96Z" fill="#ffffff"></path> </g></svg>Follow Us</p>
                        </div>
                        <div className="mb-4">
                            <div className="border-t border-gray-300"></div>
                        </div>
                        <ul className="ml-5 text-white list-none">
                            <li className="flex items-center mb-2 ">
                                <span className="mr-2 ">
                                    <i aria-hidden="true" className="fab fa-facebook-f"></i>
                                </span>
                                <span>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61552739918345&mibextid=eHce3h"
                                        className="text-white hover:text-gray-400 text-lg"
                                    >
                                        Facebook
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center mb-2 ">
                                <span className="mr-2">
                                    <i aria-hidden="true" className="fab fa-instagram"></i>
                                </span>
                                <span>
                                    <a
                                        href="https://instagram.com/officialgamagerecruiters?igshid=NzZlODBkYWE4Ng=="
                                        className="text-white hover:text-gray-400 text-lg"
                                    >
                                        Instagram
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center mb-2 ">
                                <span className="mr-2">
                                    <i aria-hidden="true" className="fab fa-tiktok"></i>
                                </span>
                                <span>
                                    <a
                                        href="https://www.tiktok.com/@gamagerecruitersofficial?_t=8hwu0zBntVS&_r=1"
                                        className="text-white hover:text-gray-400 text-lg"
                                    >
                                        TikTok
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center mb-2 ">
                                <span className="mr-2">
                                    <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                                </span>
                                <span>
                                    <a
                                        href="https://www.linkedin.com/company/gamage-recruiters"
                                        className="text-white hover:text-gray-400 text-lg"
                                    >
                                        LinkedIn
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="mr-2">
                                    <i aria-hidden="true" className="fab fa-whatsapp "></i>
                                </span>
                                <span>
                                    <a
                                        href={`https://wa.me/${+94774795371}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-lg"
                                    >
                                        Whatsapp
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="mt-10 elementor-section elementor-top-section elementor-element elementor-element-662eb118 get-in-touch-class elementor-section-boxed elementor-section-height-default bg-classic mb-6">
                <div className="container mx-auto max-w-2xl ">
                    <div className="flex flex-col items-center animate__animated animate__fadeInLeft">
                        {/* Heading */}
                        <div className="mb-4 mt-6">
                            <h3 className="text-3xl font-bold">
                                Have Questions? Reach Out To Us
                            </h3>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full ">
                            {/* WPForms Container */}
                            <div className="bg-white p-6 rounded shadow">
                                {/* WPForms Form */}
                                <form
                                    className="wpforms-validate wpforms-form wpforms-ajax-form"
                                    data-formid="846"
                                    method="post"
                                    encType="multipart/form-data"
                                    action="/ContactUS/"
                                    data-token="03d900b32605966bc736e2a96ee8d896"
                                    noValidate
                                >
                                    {/* WPForms Head Container */}
                                    <div className="mb-4 ">
                                        <p className="text-gray-600 text-sm">
                                            Pleasure was ours to have you as our guest. We are open to
                                            understanding how we could be of assistance in fulfilling
                                            your personal and business requirements.
                                        </p>
                                    </div>

                                    {/* WPForms Error NoScript */}
                                    <noscript className="text-red-500">
                                        Please enable JavaScript in your browser to complete this
                                        form.
                                    </noscript>

                                    {/* WPForms Field Container */}
                                    <div className="space-y-4">
                                        {/* Full Name */}
                                        <div className="w-full">
                                            <input
                                                type="text"
                                                id="full-name"
                                                className="w-full px-4 py-2 border border-gray-500 rounded-3xl bg-white"
                                                name="wpforms[fields][0]"
                                                placeholder="Full Name*"
                                                required
                                            />
                                        </div>

                                        {/* Company and Job Title */}
                                        <div className="flex space-x-4">
                                            <div className="w-1/2">
                                                <input
                                                    type="text"
                                                    id="company"
                                                    className="w-full px-4 py-2 border border-gray-500 rounded-3xl bg-white"
                                                    name="wpforms[fields][9]"
                                                    placeholder="Company*"
                                                    required
                                                />
                                            </div>
                                            <div className="w-1/2">
                                                <input
                                                    type="text"
                                                    id="job-title"
                                                    className="w-full px-4 py-2 border border-gray-500 rounded-3xl bg-white"
                                                    name="wpforms[fields][10]"
                                                    placeholder="Job Title*"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Email, Phone, Country, City */}
                                        <div className="flex space-x-4">
                                            {/* Email */}
                                            <div className="w-1/2">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="w-full px-4 py-2 border border-gray-500 rounded-3xl bg-white"
                                                    name="wpforms[fields][1]"
                                                    placeholder="Email*"
                                                    required
                                                />
                                            </div>
                                            {/* Phone */}
                                            <div className="w-1/2">
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    className="w-full px-4 py-2 border border-gray-500 rounded-3xl bg-white"
                                                    name="wpforms[fields][8]"
                                                    placeholder="Phone*"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Country and City */}
                                        <div className="flex space-x-4">
                                            <div className="w-1/2">
                                                <input
                                                    type="text"
                                                    id="country"
                                                    className="w-full px-4 py-2 border border-gray-500 rounded-3xl bg-white"
                                                    name="wpforms[fields][6]"
                                                    placeholder="Country*"
                                                    required
                                                />
                                            </div>
                                            <div className="w-1/2">
                                                <input
                                                    type="text"
                                                    id="city"
                                                    className="w-full px-4 py-2 border border-gray-500 rounded-3xl bg-white"
                                                    name="wpforms[fields][11]"
                                                    placeholder="City*"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* How did you hear about us? */}
                                        <div className="w-full">
                                            <select
                                                id="how-heard"
                                                className="w-full px-4 py-2 border border-gray-500 rounded-3xl"
                                                name="wpforms[fields][12]"
                                                required
                                            >
                                                <option
                                                    value=""
                                                    className="placeholder"
                                                    disabled
                                                    selected
                                                >
                                                    How did you hear about us?
                                                </option>
                                                <option value="Google">Google</option>
                                                <option value="LinkedIn">LinkedIn</option>
                                                <option value="Facebook">Facebook</option>
                                                <option value="Yelp">Yelp</option>
                                                <option value="WSJ">WSJ</option>
                                                <option value="CEW">CEW</option>
                                                <option value="MTM">MTM</option>
                                                <option value="Referral ">Referral </option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        {/* Talent Challenge */}
                                        <div className="w-full">
                                            <textarea
                                                id="talent-challenge"
                                                className="w-full px-4 py-2 border border-gray-500 rounded-2xl bg-white"
                                                name="wpforms[fields][7]"
                                                placeholder="What is your organization's talent challenge?"
                                            ></textarea>
                                        </div>
                                    </div>

                                    {/* WPForms Submit Container */}
                                    <div className="mt-6 flex items-center justify-center">
                                        <input type="hidden" name="wpforms[id]" value="846" />
                                        <input type="hidden" name="wpforms[author]" value="1" />
                                        <input type="hidden" name="wpforms[post_id]" value="3650" />
                                        <button
                                            type="submit"
                                            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font relative">
                <div className="absolute inset-0 bg-gray-300">
                </div>

            </section>
        </>
    );
};

export default Contact;
