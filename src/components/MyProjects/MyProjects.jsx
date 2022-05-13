import { Link } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { GiEarthAmerica } from 'react-icons/gi';

import snapp_demo_screenShot from '../../assets/img/snapp_demo_screenShot.png';

const MyProjects = () => {
	return (
		<section
			id='my-projects'
			className='flex flex-col flex-wrap items-center justify-center py-5 md:mx-5 md:py-14'>
			<section className='flex flex-col items-center justify-center'>
				<p className='text-xs text-gray-500'>fghj</p>
				<p className='my-1 text-lg font-semibold text-sky-400'>My Projects</p>
			</section>

			<ul className='flex flex-wrap items-start justify-center'>
				<li className='my-2 flex w-5/6 flex-col items-start justify-center rounded-md border-2 border-transparent bg-darkBlueMd px-3 transition-all delay-75 hover:border-darkBlueMd hover:bg-opacity-40 sm:m-4 sm:w-64'>
					<div>
						<img />
					</div>
					<div className='text-base font-semibold text-white'>Shopping Carts</div>

					<ul className='my-2 flex items-center justify-start text-xs font-normal text-gray-500'>
						<li className='mr-1 rounded-sm border-1 px-1 py-0.5'>Html</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Css</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Tailwindcss</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Js</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>React</li>
					</ul>

					<div className='pb-5 text-sm text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime
						facere id quidem illo, cupiditate repellat perspiciatis nihil adipisci
						inventore architecto excepturi voluptate. Dignissimos perspiciatis error
						deserunt fugit, sapiente dolorum!
					</div>
					<div className='mb-5 flex items-center justify-center'>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://github.com/MHPourhasani/shopping-cards'
							className='mr-1 flex h-9 w-28 items-center justify-center rounded-md bg-sky-500 py-1 text-center'>
							<AiOutlineGithub className='mr-1 h-6 w-6' />
							<p>github</p>
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='#'
							className='ml-1 flex h-9 w-28 items-center justify-center rounded-md bg-darkBlueLg py-1 text-gray-500 hover:text-gray-200'>
							<GiEarthAmerica className='mr-1 h-6 w-6' />
							<p>demo</p>
						</a>
					</div>
				</li>

				<li className='my-2 flex w-5/6 flex-col items-start justify-center rounded-md border-2 border-transparent bg-darkBlueMd px-3 transition-all delay-75 hover:border-darkBlueMd hover:bg-opacity-40 sm:m-4 sm:w-64'>
					<div>
						<img />
					</div>
					<div className='text-base font-semibold text-white'>Contact App</div>

					<ul className='my-2 flex items-center justify-start text-xs font-normal text-gray-500'>
						<li className='mr-1 rounded-sm border-1 px-1 py-0.5'>Html</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Css</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Tailwindcss</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Js</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>React</li>
					</ul>

					<div className='pb-5 text-sm text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime
						facere id quidem illo, cupiditate repellat perspiciatis nihil adipisci
						inventore architecto excepturi voluptate. Dignissimos perspiciatis error
						deserunt fugit, sapiente dolorum!
					</div>
					<div className='mb-5 flex items-center justify-center'>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://github.com/MHPourhasani/Contact-App'
							className='mr-1 flex h-9 w-28 items-center justify-center rounded-md bg-sky-500 py-1 text-center'>
							<AiOutlineGithub className='mr-1 h-6 w-6' />
							<p>github</p>
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href=''
							className='ml-1 flex h-9 w-28 items-center justify-center rounded-md bg-darkBlueLg py-1 text-gray-500 hover:text-gray-200'>
							<GiEarthAmerica className='mr-1 h-6 w-6' />
							<p>demo</p>
						</a>
					</div>
				</li>

				<li className='my-2 flex w-5/6 flex-col items-start justify-center rounded-md border-2 border-transparent bg-darkBlueMd px-3 transition-all delay-75 hover:border-darkBlueMd hover:bg-opacity-40 sm:m-4 sm:w-64'>
					<div>
						<img />
					</div>
					<div className='text-base font-semibold text-white'>Expence Tracker</div>

					<ul className='my-2 flex items-center justify-start text-xs font-normal text-gray-500'>
						<li className='mr-1 rounded-sm border-1 px-1 py-0.5'>Html</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Css</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Tailwindcss</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Js</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>React</li>
					</ul>

					<div className='pb-5 text-sm text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime
						facere id quidem illo, cupiditate repellat perspiciatis nihil adipisci
						inventore architecto excepturi voluptate. Dignissimos perspiciatis error
						deserunt fugit, sapiente dolorum!
					</div>
					<div className='mb-5 flex items-center justify-center'>
						<a
							target='_blank'
							rel='noreferrer'
							href=''
							className='mr-1 flex h-9 w-28 items-center justify-center rounded-md bg-sky-500 py-1 text-center'>
							<AiOutlineGithub className='mr-1 h-6 w-6' />
							<p>github</p>
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href=''
							className='ml-1 flex h-9 w-28 items-center justify-center rounded-md bg-darkBlueLg py-1 text-gray-500 hover:text-gray-200'>
							<GiEarthAmerica className='mr-1 h-6 w-6' />
							<p>demo</p>
						</a>
					</div>
				</li>

				<li className='my-2 flex w-5/6 flex-col items-start justify-center rounded-md border-2 border-transparent bg-darkBlueMd p-3 transition-all delay-75 hover:border-darkBlueMd hover:bg-opacity-40 sm:m-4 sm:w-64'>
					<div>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://snapp-demo-mhpourhasani.vercel.app/'>
							<img
								src={snapp_demo_screenShot}
								alt='snapp demo image'
								className='rounded-md'
							/>
						</a>
					</div>
					<div className='mt-1 text-base font-semibold text-white'>
						<a href='https://snapp-demo-mhpourhasani.vercel.app/'>Snapp</a>
					</div>

					<ul className='my-2 flex items-center justify-start text-xs font-normal text-gray-500'>
						<li className='mr-1 rounded-sm border-1 px-1 py-0.5'>Html</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Css</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Tailwindcss</li>
						<li className='mx-1 rounded-sm border-1 px-1 py-0.5'>Js</li>
					</ul>

					<div className='pb-5 text-sm text-gray-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime
						facere id quidem illo, cupiditate repellat perspiciatis nihil adipisci
						inventore architecto excepturi voluptate. Dignissimos perspiciatis error
						deserunt fugit, sapiente dolorum!
					</div>

					<div className='flex items-center justify-center'>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://github.com/MHPourhasani/Snapp-demo'
							className='mr-1 flex h-9 w-28 items-center justify-center rounded-md bg-sky-500 py-1 text-center'>
							<AiOutlineGithub className='mr-1 h-6 w-6' />
							<p>github</p>
						</a>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://snapp-demo-mhpourhasani.vercel.app/'
							className='ml-1 flex h-9 w-28 items-center justify-center rounded-md bg-darkBlueLg py-1 text-gray-500 hover:text-gray-200'>
							<GiEarthAmerica className='mr-1 h-6 w-6' />
							<p>demo</p>
						</a>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default MyProjects;
