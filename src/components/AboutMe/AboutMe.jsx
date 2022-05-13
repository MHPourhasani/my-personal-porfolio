import photoMeSqu from '../../assets/img/photoMeSqu.png';

import { GiRibbonMedal } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';
import { VscFolderLibrary } from 'react-icons/vsc';

const AboutMe = () => {
    return (
        <section
            id="about-me"
            className="py-5 flex flex-col flex-wrap justify-center items-center md:py-14 md:mx-5"
        >
            <section className="flex flex-col justify-center items-center">
                <p className="text-xs text-gray-500">Get To Know</p>
                <p className="font-semibold text-lg text-sky-400 my-1">
                    About Me
                </p>
            </section>

            <section className="flex flex-col flex-wrap justify-center items-center md:flex-row md:my-5">
                <div className="hidden md:block md:w-64 md:h-64 bg-sky-400 rounded-lg hover:opacity-90">
                    <span className="bg-sky-400 rounded-lg md:w-64 md:h-64 hover:rotate-12"></span>
                    <img
                        src={photoMeSqu}
                        alt="my-photo-Square"
                        className="-translate-y-32"
                    />
                </div>

                <div className="w-full md:w-1/2 lg:ml-12">
                    <ul className="flex flex-col justify-center items-center sm:flex-row sm:flex-wrap">
                        <li className="w-2/3 py-5 my-2 flex flex-col justify-center items-center bg-darkBlueMd rounded-md sm:w-1/4 sm:m-2 md:px-5">
                            <GiRibbonMedal className="text-sky-400 w-7 h-7 mb-2" />
                            <p className="font-semibold text-white my-1">
                                Experience
                            </p>
                            <p className="text-gray-400 text-sm">
                                Experience
                            </p>
                        </li>

                        <li className="w-2/3 py-5 my-2 flex flex-col justify-center items-center bg-darkBlueMd rounded-md sm:w-1/4 sm:m-2 md:px-5">
                            <HiUserGroup className="text-sky-400 w-7 h-7 mb-2" />
                            <p className="font-semibold text-white my-1">
                                Clients
                            </p>
                            <p className="text-gray-400 text-sm">
                                Experience
                            </p>
                        </li>

                        <li className="w-2/3 py-5 my-2 flex flex-col justify-center items-center bg-darkBlueMd rounded-md sm:w-1/4 sm:m-2 md:px-5">
                            <VscFolderLibrary className="text-sky-400 w-7 h-7 mb-2" />

                            <p className="font-semibold text-white my-1">
                                Projects
                            </p>
                            <p className="text-gray-400 text-sm">
                                Experience
                            </p>
                        </li>
                    </ul>

                    <section className="w-2/3 mx-auto text-sm sm:w-11/12 sm:px-10 md:w-10/12 md:px-0">
                        <p className="mx-auto text-gray-400">
                            Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Omnis facere fugit
                            atque, ipsum architecto nam quo quas odit
                            fuga reprehenderit quaerat quisquam natus
                            ipsam impedit repellat deleniti quae
                            dolorem culpa!
                        </p>
                        <a
                            href="#contact-me"
                            className="bg-sky-400 px-3 py-2 m-5 rounded-md"
                        >
                            Let's Talk
                        </a>
                    </section>
                </div>
            </section>
        </section>
    );
};

export default AboutMe;
