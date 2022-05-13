import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import { SiLinkedin } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ContactMe = () => {
	const form = useRef();
	const [error, serError] = useState(null);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_5qqvqvm', 'template_2u87qwf', form.current, 'p4hqvptU_QHTZdlGj')
			.then(
				(result) => {
					console.log(result.text);
					toast.success('Email is sent', {
						position: 'top-right',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					});
				},
				(error) => {
					if (error.text) {
						serError(error.text);
					}
					console.log(error);
				}
			);
		toast.success('Email is sent', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
	};

	return (
		<section
			id='contact-me'
			className='flex flex-col flex-wrap items-center justify-center py-5 md:mx-5 md:py-14'>
			<section className='my-5 flex flex-col items-center justify-center'>
				<p className='text-xs text-gray-500'>Get in Touch</p>
				<p className='my-1 text-lg font-semibold text-sky-400'>Contact Me</p>
			</section>

			<section className='flex w-full flex-col items-start justify-center sm:flex-row'>
				<ul className='flex w-full flex-col items-center justify-center gap-y-3'>
					<li className='flex w-5/6 flex-col items-center justify-center rounded-md border-2 border-transparent bg-darkBlueMd py-5 text-white transition-all delay-75 hover:border-darkBlueMd hover:bg-opacity-40 sm:w-7/12 lg:w-1/2'>
						<HiOutlineMail className='mb-1 h-6 w-6' />
						<p className='my-1 font-semibold'>Email</p>
						<p className='my-0.5 text-sm'>mhpourhasani.dev@gmail.com</p>
						<a
							target='_blank'
							rel='noreferrer'
							href='www.linkedin.com/in/mohammad-hasan-pourhasani'
							className='mt-1 flex items-center justify-center text-sky-400'>
							<p className='mr-0.5 text-xs'>Send a message</p>
							<MdKeyboardArrowRight className='mt-1 text-sm' />
						</a>
					</li>

					<li className='flex w-5/6 flex-col items-center justify-center rounded-md border-2 border-transparent bg-darkBlueMd py-5 text-white transition-all delay-75 hover:border-darkBlueMd hover:bg-opacity-40 sm:w-7/12 lg:w-1/2'>
						<SiLinkedin className='mb-1 h-6 w-6' />
						<p className='my-1'>Linkedin</p>
						<p className='my-0.5 text-sm'>in/mohammad-hasan-pourhasani</p>

						<a
							target='_blank'
							rel='noreferrer'
							href='www.linkedin.com/in/mohammad-hasan-pourhasani'
							className='mt-1 flex items-center justify-center text-sky-400'>
							<p className='mr-0.5 text-xs'>Send a message</p>
							<MdKeyboardArrowRight className='mt-1 text-sm' />
						</a>
					</li>

					<li className='flex w-5/6 flex-col items-center justify-center rounded-md border-2 border-transparent bg-darkBlueMd py-5 text-white transition-all delay-75 hover:border-darkBlueMd hover:bg-opacity-40 sm:w-7/12 lg:w-1/2'>
						<BsWhatsapp className='mb-1 h-6 w-6' />
						<p className='my-1'>WhatsApp</p>
						<p className='my-0.5 text-sm'>+98 9109231061</p>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://api.whatsapp.com/send?phone=+989109231061'
							className='mt-1 flex items-center justify-center text-sky-400'>
							<p className='mr-0.5 text-xs'>Send a message</p>
							<MdKeyboardArrowRight className='mt-1 text-sm' />
						</a>
					</li>
				</ul>

				<form
					ref={form}
					onSubmit={sendEmail}
					className='flex w-full flex-col items-center justify-center text-white sm:items-start'>
					<div className='my-2 flex w-5/6 flex-col items-start justify-center sm:w-full'>
						<input
							type='text'
							name='name'
							placeholder='Your Name'
							required
							className='w-full rounded-md border-2 border-gray-700 bg-transparent px-2 py-3 text-xs outline-none sm:w-10/12 lg:w-8/12'
						/>
					</div>

					<div className='my-2 flex w-5/6 flex-col items-start justify-center sm:w-full'>
						<input
							type='email'
							name='user_email'
							required
							placeholder='Your Email'
							className='w-full rounded-md border-2 border-gray-700 bg-transparent px-2 py-3 text-xs outline-none sm:w-10/12 lg:w-8/12'
						/>
					</div>

					<div className='my-2 flex w-5/6 flex-col items-start justify-center sm:w-full'>
						<input
							type='text'
							name='message'
							placeholder='Your Message'
							required
							className='w-full rounded-md border-2 border-gray-700 bg-transparent px-2 py-3 text-xs outline-none sm:w-10/12 lg:w-8/12'
						/>
					</div>

					<button type='submit' className='my-1 rounded-md bg-sky-400 p-3 text-xs'>
						Send Message
					</button>

					{error && <p className='text-red-600'>{error}</p>}
				</form>

				{/* <ContactMeComp /> */}
			</section>
		</section>
	);
};

export default ContactMe;
