import { NavLink } from 'react-router-dom';
import { BiPhoneCall, BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { VscProject } from 'react-icons/vsc';
import { TiContacts } from 'react-icons/ti';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';

const Navigation = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav className="bg-slate-900 flex justify-center items-center fixed bottom-5 p-2 rounded-full">
            <a
                href="#"
                onClick={() => setActiveNav('#')}
                className={
                    activeNav === '#'
                        ? 'p-1 mx-2 text-white bg-slate-800 rounded-full md:mx-3'
                        : 'text-gray-400 p-1 mx-2 hover:bg-slate-800 hover:text-white hover:rounded-full md:mx-3'
                }
            >
                <AiOutlineHome className="w-5 h-5" />
            </a>

            <a
                href="#about-me"
                onClick={() => setActiveNav('#about-me')}
                className={
                    activeNav === '#about-me'
                        ? 'p-1 mx-2 text-white bg-slate-800 rounded-full md:mx-3'
                        : 'text-gray-400 p-1 mx-2 hover:bg-slate-800 hover:text-white hover:rounded-full md:mx-3'
                }
            >
                <FiUsers className="w-5 h-5" />
            </a>

            <a
                href="#my-projects"
                onClick={() => setActiveNav('#my-projects')}
                className={
                    activeNav === '#my-projects'
                        ? 'p-1 mx-2 text-white bg-slate-800 rounded-full md:mx-3'
                        : 'text-gray-400 p-1 mx-2 hover:bg-slate-800 hover:text-white hover:rounded-full md:mx-3'
                }
            >
                <VscProject className="w-5 h-5" />
            </a>

            <a
                href="#my-services"
                onClick={() => setActiveNav('#my-services')}
                className={
                    activeNav === '#my-services'
                        ? 'p-1 mx-2 text-white bg-slate-800 rounded-full md:mx-3'
                        : 'text-gray-400 p-1 mx-2 hover:bg-slate-800 hover:text-white hover:rounded-full md:mx-3'
                }
            >
                <RiServiceLine className="w-5 h-5" />
            </a>

            <a
                href="#contact-me"
                onClick={() => setActiveNav('#contact-me')}
                className={
                    activeNav === '#contact-me'
                        ? 'p-1 mx-2 text-white bg-slate-800 rounded-full md:mx-3'
                        : 'text-gray-400 p-1 mx-2 hover:bg-slate-800 hover:text-white hover:rounded-full md:mx-3'
                }
            >
                <TiContacts className="w-6 h-6" />
            </a>
        </nav>
    );
};

export default Navigation;
