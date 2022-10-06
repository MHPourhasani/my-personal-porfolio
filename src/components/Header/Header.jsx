import Navigation from './Navigation';
import myPhoto from '../../assets/img/my-photo.png';

// icons
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineGithub } from 'react-icons/ai';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Header = () => {
	return (
		<section id='introduction' className='flex w-full flex-col items-center justify-center'>
			{/* my name and my activity */}
			<section className='items-cente mt-8 mb-1 flex flex-col justify-center sm:mb-5'>
				<section className='w-full text-center'>
					<div className='font-bold text-white md:mb-3'>
						<p className='my-1.5 text-base text-gray-300 sm:text-2xl'>Hello I'm</p>
						<p className='text-2xl sm:text-3xl'>Mohammad Hasan Pourhasani</p>
					</div>
					<p className='my-2 text-base font-normal text-gray-500 md:text-sm'>
						Front-End Developer | React
					</p>
				</section>
			</section>

			{/* download my resume and talk to me */}
			<section className='mt-1 mb-7 flex items-center justify-center gap-x-2 text-center'>
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

			<section className='relative flex justify-center sm:w-9/12'>
				{/* social media links */}
				<div className='lg: hidden text-sky-400 sm:absolute sm:bottom-0 sm:block sm:-translate-x-52 md:left-36 md:-translate-x-32 lg:-translate-x-16 xl:translate-x-5'>
					<nav className='flex flex-col items-center gap-4'>
						<a
							target='_blank'
							rel='noreferrer'
							href='www.linkedin.com/in/mohammad-hasan-pourhasani'>
							<HiOutlineMail className='h-auto w-6 hover:text-sky-500' />
						</a>

						<a
							target='_blank'
							rel='noreferrer'
							href='www.linkedin.com/in/mohammad-hasan-pourhasani'>
							<FaLinkedinIn className='h-auto w-5 hover:text-sky-500' />
						</a>

						<a target='_blank' rel='noreferrer' href='https://github.com/MHPourhasani'>
							<AiOutlineGithub className='h-auto w-6 hover:text-sky-500' />
						</a>
						<span className='cursor-none'>|</span>
					</nav>
				</div>

				{/* my photo */}
				<div className='flex h-auto w-9/12 justify-center rounded-t-full bg-gradient-to-t from-sky-400 to-transparent px-5 sm:mt-3 sm:w-64 md:h-auto md:w-72'>
					<img src={myPhoto} alt='mhp photo' aria-hidden />
				</div>

				{/* Scroll down btn */}
				<button className='hidden animate-pulse text-sky-400 sm:absolute sm:bottom-0 sm:block sm:-translate-y-12 sm:translate-x-52 md:translate-x-60'>
					<a
						href='#about-me'
						className='flex -rotate-90 items-center justify-center gap-2'>
						<MdKeyboardArrowLeft className='h-auto w-5' />
						<span>Scroll down</span>
					</a>
				</button>
			</section>

			{/* menu navigation */}
			<Navigation />
		</section>
	);
};

export default Header;
