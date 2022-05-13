import photoMeSqu from '../../assets/img/photoMeSqu.png';

import { GiRibbonMedal } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';
import { VscFolderLibrary } from 'react-icons/vsc';

const AboutMe = () => {
	return (
		<section
			id='about-me'
			className='flex w-full flex-col flex-wrap items-center justify-around py-5 md:py-14'>
			<section className='flex flex-col items-center justify-center'>
				<p className='text-xs text-gray-500'>Get To Know</p>
				<p className='my-1 text-lg font-semibold text-sky-400'>About Me</p>
			</section>

			<section className='flex flex-col flex-wrap items-center justify-center md:my-5 md:flex-row'>
				<div className='hidden rounded-lg bg-sky-400 hover:opacity-90 md:block md:h-64 md:w-64'>
					<img
						src={photoMeSqu}
						aria-hidden
						alt='my-photo-Square'
						className='-translate-y-32'
					/>
				</div>

				<div className='w-full md:w-1/2 lg:ml-16'>
					<ul className='flex flex-col items-center justify-center sm:flex-row sm:flex-wrap'>
						<li className='my-2 flex w-2/3 flex-col items-center justify-center rounded-md bg-darkBlueMd py-5 sm:mr-2 sm:w-1/4 md:px-5'>
							<GiRibbonMedal className='mb-2 h-7 w-7 text-sky-400' />
							<p className='my-1 font-semibold text-white'>Experience</p>
							<p className='text-sm text-gray-400'>Junior</p>
						</li>

						<li className='my-2 flex w-2/3 flex-col items-center justify-center rounded-md bg-darkBlueMd py-5 sm:m-2 sm:w-1/4 md:px-5'>
							<HiUserGroup className='mb-2 h-7 w-7 text-sky-400' />
							<p className='my-1 font-semibold text-white'>Clients</p>
							<p className='text-sm text-gray-400'>Experience</p>
						</li>

						<li className='my-2 flex w-2/3 flex-col items-center justify-center rounded-md bg-darkBlueMd py-5 sm:ml-2 sm:w-1/4 md:px-5'>
							<VscFolderLibrary className='mb-2 h-7 w-7 text-sky-400' />

							<p className='my-1 font-semibold text-white'>Projects</p>
							<p className='text-sm text-gray-400'>Experience</p>
						</li>
					</ul>

					<section className='mx-auto my-2 w-2/3 text-sm sm:w-11/12 sm:px-10 md:my-0 md:w-10/12 md:px-2.5'>
						<p className='mb-5 text-gray-400'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facere
							fugit atque, ipsum architecto nam quo quas odit fuga reprehenderit
							quaerat quisquam natus ipsam impedit repellat deleniti quae dolorem
							culpa!
						</p>
						<a
							href='#contact-me'
							className='my-5 rounded-md bg-sky-400 px-3 py-2 font-medium'>
							Let's Talk
						</a>
					</section>
				</div>
			</section>
		</section>
	);
};

export default AboutMe;
