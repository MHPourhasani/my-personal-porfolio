import Navigation from './Navigation';
import photoMe from '../../assets/img/photoMe.png';
import photoMe_min from '../../assets/img/photoMe.png';

import { SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';

const Header = () => {
	return (
		<section className='flex w-full flex-col items-center justify-center'>
			{/* <Navigation className='z-10' /> */}

			<section className='items-cente mt-10 mb-1 flex flex-col justify-center sm:mb-5'>
				<section className='w-full text-center'>
					<div className='font-bold md:mb-3'>
						<p className='my-1 text-sm text-white sm:text-2xl'>Hello I'm</p>
						<p className='text-xl text-white sm:text-3xl'>Mohammad Hasan Pourhasani</p>
					</div>
					<p className='my-2 text-base font-normal text-gray-500 md:text-sm'>
						Front-End Developer | React
					</p>
				</section>
			</section>

			<section className='my-5 flex items-center justify-center text-center sm:my-5'>
				<a
					href='/../assets/files/CV.pdf'
					download
					className='mx-1 flex h-10 w-28 items-center justify-center rounded-md border-2 border-gray-500 text-sm text-sky-400'>
					Download CV
				</a>
				<a
					href='#contact-me'
					className='mx-1 flex h-10 w-24 items-center justify-center rounded-md border-2 border-sky-400 bg-sky-400 text-sm'>
					Let's Talk
				</a>
			</section>

			<section className='my-10 h-64 w-56 rounded-t-full rounded-b-md bg-gradient-to-t from-sky-400 to-transparent md:h-72 md:w-64'>
				<img src={photoMe_min} alt='my-photo' className='-translate-y-20 md:-translate-y-24' />
			</section>

			<section className='absolute hidden text-sky-500 sm:bottom-20 sm:left-28 sm:block md:bottom-14 md:left-36 lg:left-72 xl:left-96'>
				<nav>
					<a
						href='www.linkedin.com/in/mohammad-hasan-pourhasani'
						className='mx-1 hover:text-sky-400'>
						<HiOutlineMail />
					</a>

					<a
						href='www.linkedin.com/in/mohammad-hasan-pourhasani'
						className='mx-1 hover:text-sky-400'>
						<SiLinkedin />
					</a>

					<a href='https://github.com/MHPourhasani' className='mt-1 hover:text-sky-400'>
						<AiOutlineGithub />
					</a>
					<p className='mx-0.5 cursor-default px-1 py-1'>|</p>
				</nav>
			</section>

			<Navigation className='z-10' />
		</section>
	);
};

export default Header;
