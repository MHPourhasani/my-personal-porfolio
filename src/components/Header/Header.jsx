import Navigation from './Navigation';
import photoMe_min from '../../assets/img/photoMe.png';

// icons
import { SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineGithub } from 'react-icons/ai';

const Header = () => {
	return (
		<section id='introduction' className='flex w-full flex-col items-center justify-center'>
			{/* my name and my activity */}
			<section className='items-cente mt-10 mb-1 flex flex-col justify-center sm:mb-5'>
				<section className='w-full text-center'>
					<div className='font-bold text-white md:mb-3'>
						<p className='my-1 text-sm sm:text-2xl'>Hello I'm</p>
						<p className='text-xl sm:text-3xl'>Mohammad Hasan Pourhasani</p>
					</div>
					<p className='my-2 text-base font-normal text-gray-500 md:text-sm'>
						Front-End Developer | React
					</p>
				</section>
			</section>

			{/* download my resume and talk to me */}
			<section className='z-10 mt-1 mb-7 flex items-center justify-center gap-x-2 text-center'>
				<a
					href='/../assets/files/mhpourhasani-resume.pdf'
					download
					className='flex h-10 w-32 items-center justify-center rounded-md border-2 border-gray-500 text-sm text-sky-400'>
					Download Resume
				</a>
				<a
					href='#contact-me'
					rel='noreferrer'
					className='flex h-10 w-24 items-center justify-center rounded-md bg-sky-400 text-sm'>
					Let's Talk
				</a>
			</section>

			{/* my photo */}
			<section className='my-10 h-64 w-56 rounded-t-full rounded-b-md bg-gradient-to-t from-sky-400 to-transparent md:h-72 md:w-64'>
				<img
					src={photoMe_min}
					alt='my-photo'
					aria-hidden
					className='-translate-y-20 md:-translate-y-24'
				/>
			</section>

			{/* social media links */}
			<section className='absolute hidden text-sky-500 sm:left-28 sm:block sm:translate-y-40 md:left-36 md:translate-y-48 lg:left-72 xl:left-96'>
				<nav>
					<a
						target='_blank'
						rel='noreferrer'
						href='www.linkedin.com/in/mohammad-hasan-pourhasani'
						className='mx-1 hover:text-sky-400'>
						<HiOutlineMail />
					</a>

					<a
						target='_blank'
						rel='noreferrer'
						href='www.linkedin.com/in/mohammad-hasan-pourhasani'
						className='mx-1 hover:text-sky-400'>
						<SiLinkedin />
					</a>

					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/MHPourhasani'
						className='mt-1 hover:text-sky-400'>
						<AiOutlineGithub />
					</a>
					<p className='mx-0.5 cursor-default px-1 py-1'>|</p>
				</nav>
			</section>

			{/* menu navigation */}
			<Navigation />
		</section>
	);
};

export default Header;
