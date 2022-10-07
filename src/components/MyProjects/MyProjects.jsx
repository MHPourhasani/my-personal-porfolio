// icons
import { AiOutlineGithub } from 'react-icons/ai';
import { GiEarthAmerica } from 'react-icons/gi';

// Import Swiper core and required modules and Import Swiper styles
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// projects data
import { projectsData } from '../../projectsData';

const MyProjects = () => {
	return (
		<section
			id='my-projects'
			className='flex w-full flex-col items-center justify-center gap-3 py-5 md:py-14'>
			<section className='flex flex-col items-center justify-center'>
				<p className='text-xs text-gray-500 sm:text-sm'>Get To Know</p>
				<p className='my-1.5 text-lg font-semibold text-sky-400 md:text-xl'>My Projects</p>
			</section>

			<Swiper
				cssMode={true}
				navigation={true}
				mousewheel={true}
				keyboard={true}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					320: {
						width: 320,
						slidesPerView: 1,
						centeredSlides: true,
						spaceBetween: 10,
					},
					640: {
						width: 640,
						slidesPerView: 2,
						centeredSlides: false,
						spaceBetween: -40,
					},
					768: {
						width: 768,
						slidesPerView: 2,
						spaceBetween: -10,
					},
					1024: {
						width: 1024,
						slidesPerView: 3,
						spaceBetween: -80,
					},
					1280: {
						width: 1280,
						slidesPerView: 3,
						spaceBetween: -100,
					},
				}}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className='items my-3 flex w-11/12 justify-center xl:w-11/12'>
				{projectsData.map((project) => (
					<SwiperSlide key={project.id}>
						<li className='flex w-full flex-col items-start justify-center gap-3 rounded-md bg-darkBlueMd p-3 sm:w-10/12 md:w-11/12 lg:w-9/12'>
							{/* project image */}
							<a target='_blank' rel='noreferrer' href={project.demoLink}>
								<img
									src={project.image}
									alt={`${project.name} project`}
									aria-hidden
									className='rounded-md hover:scale-105'
								/>
							</a>

							{/* project name */}
							<div className='text-base font-semibold text-white hover:text-darkBlueLg md:text-lg'>
								<a target='_blank' rel='noreferrer' href={project.demoLink}>
									{project.name}
								</a>
							</div>

							{/* project description */}
							<div className='text-sm text-gray-500 xl:text-base'>
								{project.description}
							</div>

							{/* technologies used in project */}
							<ul className='flex items-center gap-1.5'>
								{project.technologiesUsed.map((technology) => (
									<li className='rounded-md bg-slate-800 p-1.5'>{technology}</li>
								))}
							</ul>

							{/* github and demo project link */}
							<div className='flex w-full items-center justify-between gap-2'>
								<a
									target='_blank'
									rel='noreferrer'
									href={project.githubLink}
									className='flex flex-1 items-center justify-center rounded-md bg-sky-500 py-2 hover:bg-sky-600'>
									<AiOutlineGithub className='mr-1 h-6 w-6' />
									<p>Github</p>
								</a>
								<a
									target='_blank'
									rel='noreferrer'
									href={project.demoLink}
									className='flex flex-1 items-center justify-center rounded-md bg-darkBlueLg py-2 text-gray-500 hover:bg-slate-800 hover:text-gray-200'>
									<GiEarthAmerica className='mr-1 h-6 w-6' />
									<p>Demo</p>
								</a>
							</div>
						</li>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default MyProjects;
