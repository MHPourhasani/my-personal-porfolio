import myPhoto_2 from '../../assets/img/my-photo-2.png';

import { GiRibbonMedal } from 'react-icons/gi';
import { FaUniversity } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const AboutMe = () => {
	const summaryAboutMe = [
		{
			title: 'Experience',
			detail: 'junior developer',
			icon: <GiRibbonMedal className='mb-2 h-10 w-10 text-sky-400' />,
		},
		{
			title: 'Education',
			detail: 'Computer Engineering Stu',
			icon: <FaUniversity className='mb-2 h-10 w-10 text-sky-400' />,
		},
		{
			title: 'Projects',
			detail: '5 numbers',
			icon: <VscFolderLibrary className='mb-2 h-10 w-10 text-sky-400' />,
		},
	];

	return (
		<section
			id='about-me'
			className='flex w-full flex-col flex-wrap items-center justify-around gap-2 py-5 md:pt-14 md:pb-0 lg:gap-10'>
			<section className='flex flex-col items-center justify-center'>
				<p className='text-xs text-gray-500 sm:text-sm'>Get To Know</p>
				<p className='my-1.5 text-lg font-semibold text-sky-400 md:text-xl'>About Me</p>
			</section>

			<section className='flex w-10/12 flex-col items-center justify-center sm:w-11/12 md:my-5 md:flex-row md:items-start md:gap-5 lg:gap-12'>
				{/* my photo */}
				<div className='relative hidden rounded-lg bg-sky-400 hover:scale-105 md:h-64 md:w-64 lg:block lg:h-72 lg:w-72'>
					<img
						src={myPhoto_2}
						aria-hidden
						alt='mhp photo'
						className='absolute bottom-0 w-10/12 translate-x-5'
					/>
				</div>

				{/* about me */}
				<div className='w-full md:w-10/12 lg:w-7/12 xl:w-1/2'>
					<ul className='flex flex-col items-center justify-center gap-3 sm:flex-row'>
						{summaryAboutMe.map((summary) => (
							<li className='flex w-full flex-col items-center justify-center rounded-md bg-darkBlueMd py-5'>
								{summary.icon}
								<p className='my-1 font-semibold text-white'>{summary.title}</p>
								<p className='text-sm text-gray-400 md:tracking-tighter'>
									{summary.detail}
								</p>
							</li>
						))}
					</ul>

					{/* about me description */}
					<section className='my-2 flex flex-col items-start gap-4 text-sm'>
						<p className='text-justify text-gray-400'>
							I'm Mohammad Hasan Pourhasani and I'm 21 years old. I started learning
							Front-end from the beginning of 2021. During the learning period, I have
							done various projects.
						</p>
						<a
							href='#my-projects'
							className='rounded-md bg-sky-500 px-5 py-2 font-medium hover:bg-sky-600'>
							My Projects
						</a>
					</section>
				</div>
			</section>
		</section>
	);
};

export default AboutMe;
