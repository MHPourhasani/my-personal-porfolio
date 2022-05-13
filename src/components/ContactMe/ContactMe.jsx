import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import { SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ContactMe = () => {
    const form = useRef();
    const [error, serError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_5qqvqvm',
                'template_2u87qwf',
                form.current,
                'p4hqvptU_QHTZdlGj',
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success('Email is sent', {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark',
                    });
                },
                (error) => {
                    if (error.text) {
                        serError(error.text);
                    }
                    console.log(error);
                },
            );
            toast.success('Email is sent', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
    };

    return (
        <section
            id="contact-me"
            className="py-5 flex flex-col flex-wrap justify-center items-center md:py-14 md:mx-5"
        >
            <section className="flex flex-col justify-center items-center my-5">
                <p className="text-xs text-gray-500">Get in Touch</p>
                <p className="font-semibold text-lg text-sky-400 my-1">
                    Contact Me
                </p>
            </section>

            <section className="w-full flex flex-col justify-center items-start sm:flex-row">
                <ul className="w-full flex flex-col justify-center items-center gap-y-3">
                    <li className="w-5/6 py-5 bg-darkBlueMd text-white flex flex-col justify-center items-center border-2 border-transparent rounded-md hover:bg-opacity-40 hover:border-darkBlueMd transition-all delay-75 sm:w-7/12 lg:w-1/2">
                        <HiOutlineMail className="w-6 h-6 mb-2" />
                        <p className="font-semibold my-1">Email</p>
                        <p className="text-sm my-0.5">
                            mhpourhasani.dev@gmail.com
                        </p>
                        <a
                            href="www.linkedin.com/in/mohammad-hasan-pourhasani"
                            className="text-sky-400 flex justify-center items-center"
                        >
                            <p className="mr-0.5 text-xs">
                                Send a message
                            </p>
                            <MdKeyboardArrowRight className="mt-1 text-sm" />
                        </a>
                    </li>

                    <li className="w-5/6 py-5 bg-darkBlueMd text-white flex flex-col justify-center items-center border-2 border-transparent rounded-md hover:bg-opacity-40 hover:border-darkBlueMd transition-all delay-75 sm:w-7/12 lg:w-1/2">
                        <SiLinkedin className="w-6 h-6 mb-2" />
                        <p className="my-1">Linkedin</p>
                        <p className="text-sm my-0.5">
                            in/mohammad-hasan-pourhasani
                        </p>

                        <a
                            href="www.linkedin.com/in/mohammad-hasan-pourhasani"
                            className="text-sky-400 flex justify-center items-center"
                        >
                            <p className="mr-0.5 text-xs">
                                Send a message
                            </p>
                            <MdKeyboardArrowRight className="mt-1 text-sm" />
                        </a>
                    </li>

                    <li className="w-5/6 py-5 bg-darkBlueMd text-white flex flex-col justify-center items-center border-2 border-transparent rounded-md hover:bg-opacity-40 hover:border-darkBlueMd transition-all delay-75 sm:w-7/12 lg:w-1/2">
                        <BsWhatsapp className="w-6 h-6 mb-2" />
                        <p className="my-1">WhatsApp</p>
                        <p className="text-sm my-0.5">
                            +98 9109231061
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=+989109231061"
                            className="text-sky-400 flex justify-center items-center"
                        >
                            <p className="mr-0.5 text-xs">
                                Send a message
                            </p>
                            <MdKeyboardArrowRight className="mt-1 text-sm" />
                        </a>
                    </li>
                </ul>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="w-full text-white flex flex-col justify-center items-center sm:items-start"
                >
                    <div className="w-5/6 my-2 flex flex-col justify-center items-start sm:w-full">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full bg-transparent text-xs border-2 border-gray-700 rounded-md outline-none px-2 py-3 sm:w-10/12 lg:w-8/12"
                        />
                    </div>

                    <div className="w-5/6 my-2 flex flex-col justify-center items-start sm:w-full">
                        <input
                            type="email"
                            name="user_email"
                            required
                            placeholder="Your Email"
                            className="w-full bg-transparent text-xs border-2 border-gray-700 rounded-md outline-none px-2 py-3 sm:w-10/12 lg:w-8/12"
                        />
                    </div>

                    <div className="w-5/6 my-2 flex flex-col justify-center items-start sm:w-full">
                        <input
                            type="text"
                            name="message"
                            placeholder="Your Message"
                            required
                            className="w-full bg-transparent text-xs border-2 border-gray-700 rounded-md outline-none px-2 py-3 sm:w-10/12 lg:w-8/12"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-sky-400 text-xs p-3 rounded-md my-1"
                    >
                        Send Message
                    </button>

                    {error && <p className="text-red-600">{error}</p>}
                </form>

                {/* <ContactMeComp /> */}
            </section>
        </section>
    );
};

export default ContactMe;
