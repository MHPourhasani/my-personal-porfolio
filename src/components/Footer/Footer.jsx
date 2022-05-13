import { AiOutlineHome } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { VscProject } from 'react-icons/vsc';
import { TiContacts } from 'react-icons/ti';
import { SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="w-full h-52 bg-sky-500 sm:h-44">
            <nav className="flex flex-wrap justify-center items-center text-sm py-5">
                <a
                    href="#"
                    className="p-1 mx-2 hover:text-darkBlueMd hover:rounded-full hover:bg-gray-400 hover:bg-opacity-50 md:mx-3"
                >
                    {/* <AiOutlineHome className="w-5 h-5" /> */}
                    Home
                </a>

                <a className="p-1 mx-2 hover:text-darkBlueMd hover:rounded-full hover:bg-gray-400 hover:bg-opacity-50 md:mx-3">
                    {/* <FiUsers className="w-5 h-5" /> */}
                    About Me
                </a>

                <a
                    href="#my-projects"
                    className="p-1 mx-2 hover:text-darkBlueMd hover:rounded-full hover:bg-gray-400 hover:bg-opacity-50 md:mx-3"
                >
                    {/* <VscProject className="w-5 h-5" /> */}
                    My Projects
                </a>

                <a
                    href="#my-services"
                    className="p-1 mx-2 hover:text-darkBlueMd hover:rounded-full hover:bg-gray-400 hover:bg-opacity-50 md:mx-3"
                >
                    {/* <TiContacts className="w-6 h-6" /> */}
                    My Services
                </a>

                <a
                    href="#contact-me"
                    className="p-1 mx-2 hover:text-darkBlueMd hover:rounded-full hover:bg-gray-400 hover:bg-opacity-50 md:mx-3"
                >
                    {/* <TiContacts className="w-6 h-6" /> */}
                    Contact Me
                </a>
            </nav>

            <ul className="flex justify-center items-center">
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
                    href="https://api.whatsapp.com/send?phone=+989109231061"
                    className="mx-1"
                >
                    <BsWhatsapp />
                </a>

                <a
                    href="https://github.com/MHPourhasani"
                    className="mx-1"
                >
                    <AiOutlineGithub />
                </a>
            </ul>
        </footer>
    );
};

export default Footer;
