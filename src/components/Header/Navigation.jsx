import { useState } from 'react';

// icons
import { TbSmartHome } from 'react-icons/tb';
import { FiUsers } from 'react-icons/fi';
import { VscProject } from 'react-icons/vsc';
import { TiContacts } from 'react-icons/ti';
import { RiServiceLine } from 'react-icons/ri';

const Navigation = () => {
	const [activeNav, setActiveNav] = useState('#introduction');

	return (
		<nav className='fixed bottom-5 z-10 flex items-center justify-center rounded-full bg-slate-900 p-2 shadow-md shadow-slate-800'>
			{/* home icon */}
			<a
				href='#introduction'
				onClick={() => setActiveNav('#introduction')}
				className={
					activeNav === '#introduction'
						? 'mx-2 rounded-full bg-slate-800 p-1 text-white md:mx-3'
						: 'mx-2 p-1 text-gray-400 hover:rounded-full hover:bg-slate-800 hover:text-white md:mx-3'
				}>
				<TbSmartHome className='h-7 w-7 xl:h-8 xl:w-8' />
			</a>

			{/* about me icon */}
			<a
				href='#about-me'
				onClick={() => setActiveNav('#about-me')}
				className={
					activeNav === '#about-me'
						? 'mx-2 rounded-full bg-slate-800 p-1.5 text-white md:mx-3'
						: 'mx-2 p-1.5 text-gray-400 hover:rounded-full hover:bg-slate-800 hover:text-white md:mx-3'
				}>
				<FiUsers className='h-6 w-6 xl:h-7 xl:w-7' />
			</a>

			{/* skills icon */}
			<a
				href='#my-skills'
				onClick={() => setActiveNav('#my-skills')}
				className={
					activeNav === '#my-skills'
						? 'mx-2 rounded-full bg-slate-800 p-1.5 text-white md:mx-3'
						: 'mx-2 p-1.5 text-gray-400 hover:rounded-full hover:bg-slate-800 hover:text-white md:mx-3'
				}>
				<RiServiceLine className='h-6 w-6 xl:h-7 xl:w-7' />
			</a>

			{/* projects icon */}
			<a
				href='#my-projects'
				onClick={() => setActiveNav('#my-projects')}
				className={
					activeNav === '#my-projects'
						? 'mx-2 rounded-full bg-slate-800 p-1.5 text-white md:mx-3'
						: 'mx-2 p-1.5 text-gray-400 hover:rounded-full hover:bg-slate-800 hover:text-white md:mx-3'
				}>
				<VscProject className='h-6 w-6 xl:h-7 xl:w-7' />
			</a>

			{/* contact me icon */}
			<a
				href='#contact-me'
				onClick={() => setActiveNav('#contact-me')}
				className={
					activeNav === '#contact-me'
						? 'mx-2 rounded-full bg-slate-800 p-1 text-white md:mx-3'
						: 'mx-2 p-1 text-gray-400 hover:rounded-full hover:bg-slate-800 hover:text-white md:mx-3'
				}>
				<TiContacts className='h-7 w-7 xl:h-8 xl:w-8' />
			</a>
		</nav>
	);
};

export default Navigation;
