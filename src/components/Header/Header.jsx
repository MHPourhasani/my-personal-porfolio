import Navigation from './Navigation';
import photoMe from '../../assets/img/photoMe.png';

import { SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';

const Header = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center">
            {/* <Navigation className='z-10' /> */}

            <section className="flex flex-col justify-center items-cente mt-10 mb-1 sm:mb-5">
                <section className="text-center w-full">
                    <div className="font-bold md:mb-3">
                        <p className="text-white text-sm my-1 sm:text-2xl">
                            Hello I'm
                        </p>
                        <p className="text-white text-xl sm:text-3xl">
                            Mohammad Hasan Pourhasani
                        </p>
                    </div>
                    <p className="font-normal text-base text-gray-500 my-2 md:text-sm">
                        Front-End Developer | React
                    </p>
                </section>
            </section>

            <section className="flex justify-center items-center text-center my-5 sm:my-5">
                <a
                    href="/../assets/files/CV.pdf"
                    download
                    className="w-28 h-10 mx-1 text-sm text-sky-400 border-2 border-gray-500 rounded-md flex justify-center items-center"
                >
                    Download CV
                </a>
                <a
                    href="#contact-me"
                    className="w-24 h-10 mx-1 text-sm bg-sky-400 border-2 border-sky-400 rounded-md flex justify-center items-center"
                >
                    Let's Talk
                </a>
            </section>

            <section className="w-56 h-64 my-10 bg-gradient-to-t from-sky-400 to-transparent rounded-t-full rounded-b-md md:w-64 md:h-72">
                <img
                    src={photoMe}
                    alt="my-photo"
                    className="-translate-y-24 "
                />
            </section>

            <section className="absolute bottom-10 left-60 after:content-none after:w-5 after:h-10 text-sky-500">
                <nav>
                    <a
                        href="www.linkedin.com/in/mohammad-hasan-pourhasani"
                        className="mx-1"
                    >
                        <HiOutlineMail />
                    </a>

                    <a
                        href="www.linkedin.com/in/mohammad-hasan-pourhasani"
                        className="mx-1"
                    >
                        <SiLinkedin />
                    </a>

                    <a
                        href="https://github.com/MHPourhasani"
                        className="mx-1"
                    >
                        <AiOutlineGithub />
                    </a>
                </nav>
            </section>

            <Navigation className="z-10" />
        </section>
    );
};

export default Header;
