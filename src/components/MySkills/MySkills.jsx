import { Disclosure } from '@headlessui/react';

//  icons
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss, SiJavascript, SiReact, SiRedux, SiGithub } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const MySkills = () => {
	const mySkills = [
		{
			icon: <AiFillHtml5 className='h-6 w-6 text-orange-600' />,
			title: 'HTML',
			description:
				'o	The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
		},
		{
			icon: <DiCss3 className='h-6 w-6 text-blue-600' />,
			title: 'CSS',
			description: 'o	CSS is the language we use to style a Web page.',
		},
		{
			icon: <FaSass className='h-6 w-6 text-pink-500' />,
			title: 'Saas',
			description:
				'o	Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.',
		},
		{
			icon: <SiTailwindcss className='h-6 w-6 text-sky-400' />,
			title: 'Tailwindcss',
			description:
				'o	Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.',
		},
		{
			icon: <SiJavascript className='h-6 w-6 text-yellow-400' />,
			title: 'JavaScript',
			description:
				'o	JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
		},
		{
			icon: <SiReact className='h-6 w-6 text-sky-400' />,
			title: 'React',
			description:
				'o	React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.',
		},
		{
			icon: <SiRedux className='h-6 w-6 text-violet-700' />,
			title: 'Redux',
			description:
				'o Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Do some exercise project with redux for managing and centralizing application state.Redux is a small library with a simple, limited API designed to be a predictable container for application state. It operates in a similar fashion to a reducing function, a functional programming concept. ',
		},
		{
			icon: <SiRedux className='h-6 w-6 text-violet-700' />,
			title: 'Redux-toolkit',
			description:
				'The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux: 1. Configuring a Redux store is too complicated 2. I have to add a lot of packages to get Redux to do anything useful 3. Redux requires too much boilerplate code',
		},
		{
			icon: <SiGithub className='h-6 w-6' />,
			title: 'Git & Github',
			description:
				'o	Utilizing the git flow procedure including (branching, pull, push, standard commit) to better manage the project and code review. ',
		},
	];

	return (
		<section
			id='my-skills'
			className='flex w-full flex-col items-center justify-center gap-3 py-5 md:py-14'>
			<div className='flex flex-col items-center justify-center'>
				<span className='text-xs text-gray-500 sm:text-sm'>Get to Know</span>
				<span className='my-1.5 text-lg font-semibold text-sky-400 md:text-xl'>
					My Skills
				</span>
			</div>

			{/* show my skills */}
			<section className='flex w-5/6 flex-wrap items-center justify-center my-3 gap-2 md:w-11/12 md:items-start'>
				{mySkills.map((skill) => (
					<Disclosure
						as='div'
						className='w-full rounded-md bg-darkBlueMd p-2 md:w-5/12 xl:w-3/12'>
						{({ open }) => (
							<>
								<Disclosure.Button className='flex w-full items-center justify-between text-white'>
									<span className='flex items-center gap-3'>
										{skill.icon}
										<span className='font-medium'>{skill.title}</span>
									</span>

									<MdOutlineKeyboardArrowDown
										className={`h-6 w-6 ${
											open
												? 'rotate-180 '
												: 'transition-all delay-150 ease-in'
										}`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel>
									<p className='mt-3 ml-3 text-sm text-gray-400'>
										{skill.description}
									</p>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				))}
			</section>
		</section>
	);
};

export default MySkills;
