import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp, BsGithub } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className='h-56 w-full bg-sky-500 sm:h-48 lg:h-56'>
			<nav className='flex flex-wrap items-center justify-center gap-3 py-5 text-sm md:gap-4 lg:py-7 lg:text-base'>
				<a
					href='#introduction'
					className='px-2 py-1 hover:rounded-full hover:bg-darkBlueLg hover:text-white'>
					Home
				</a>

				<a
					href='#about-me'
					className='px-2 py-1 hover:rounded-full hover:bg-darkBlueLg hover:text-white'>
					About Me
				</a>

				<a
					href='#my-projects'
					className='px-2 py-1 hover:rounded-full hover:bg-darkBlueLg hover:text-white'>
					My Projects
				</a>

				<a
					href='#my-services'
					className='px-2 py-1 hover:rounded-full hover:bg-darkBlueLg hover:text-white'>
					My Services
				</a>

				<a
					href='#contact-me'
					className='px-2 py-1 hover:rounded-full hover:bg-darkBlueLg hover:text-white'>
					Contact Me
				</a>
			</nav>

			<ul className='flex items-center justify-center gap-4 md:mt-3 md:gap-5 lg:gap-6'>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='www.linkedin.com/in/mohammad-hasan-pourhasani'>
					<HiOutlineMail className='h-auto w-5 hover:text-darkBlueLg lg:w-6' />
				</a>

				<a
					target='_blank'
					rel='noopener noreferrer'
					href='www.linkedin.com/in/mohammad-hasan-pourhasani'>
					<FaLinkedinIn className='h-auto w-5 hover:text-darkBlueLg lg:w-6' />
				</a>

				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://api.whatsapp.com/send?phone=+989109231061'>
					<BsWhatsapp className='h-auto w-5 hover:text-darkBlueLg lg:w-6' />
				</a>

				<a target='_blank' rel='noopener noreferrer' href='https://github.com/MHPourhasani'>
					<BsGithub className='h-auto w-5 hover:text-darkBlueLg lg:w-6' />
				</a>
			</ul>
		</footer>
	);
};

export default Footer;
