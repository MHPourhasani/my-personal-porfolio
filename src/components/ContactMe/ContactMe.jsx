import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// icons
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ContactMe = () => {
	const form = useRef();
	const [error, serError] = useState(null);

	// send email function
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_5qqvqvm', 'template_2u87qwf', form.current, 'p4hqvptU_QHTZdlGj')
			.then(
				(result) => {
					toast.success('Email sent successfully', {
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
					toast.error('The email was not sent', {
						position: 'top-right',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					});
				}
			);
	};

	return (
		<section
			id='contact-me'
			className='flex w-full flex-col items-center justify-center py-5 md:py-14'>
			<section className='my-5 flex flex-col items-center justify-center lg:mb-10'>
				<p className='text-xs text-gray-500'>Get in Touch</p>
				<p className='my-1.5 text-lg font-semibold text-sky-400 md:text-xl'>Contact Me</p>
			</section>

			<section className='flex w-full flex-col items-start justify-center sm:w-11/12 sm:flex-row sm:justify-between sm:gap-5 md:w-10/12 md:gap-10 lg:w-8/12 lg:gap-16'>
				{/* Reach me on social media section */}
				<ul className='flex w-full flex-col items-center justify-center gap-3 sm:w-9/12 lg:w-9/12'>
					{/* my email section */}
					<li className='flex w-5/6 flex-col items-center justify-center gap-2 rounded-md bg-darkBlueMd py-5 text-white ease-in-out hover:scale-105 sm:w-full'>
						<HiOutlineMail className='h-auto w-8 lg:w-9' />
						<p className='text-lg font-semibold lg:text-xl'>Email</p>
						<p className='text-sm text-gray-300'>mhpourhasani.dev@gmail.com</p>
						<a
							target='_blank'
							rel='noreferrer'
							href='www.linkedin.com/in/mohammad-hasan-pourhasani'
							className='mt-1 flex items-center justify-center text-sky-400 hover:animate-bounce hover:text-sky-500'>
							<p className='mr-0.5 text-sm lg:text-sm'>Send a message</p>
							<MdKeyboardArrowRight className='mt-1 text-sm' />
						</a>
					</li>

					{/* my linkedin section */}
					<li className='flex w-5/6 flex-col items-center justify-center gap-2 rounded-md bg-darkBlueMd py-5 text-white ease-in-out hover:scale-105 sm:w-full'>
						<FaLinkedinIn className='h-auto w-7 lg:w-8' />
						<p className='text-lg font-semibold lg:text-xl'>Linkedin</p>
						<p className='text-sm text-gray-300'>in/mohammad-hasan-pourhasani</p>

						<a
							target='_blank'
							rel='noreferrer'
							href='www.linkedin.com/in/mohammad-hasan-pourhasani'
							className='mt-1 flex items-center justify-center text-sky-400 hover:animate-bounce hover:text-sky-500'>
							<p className='mr-0.5 text-sm lg:text-sm'>Send a message</p>
							<MdKeyboardArrowRight className='mt-1 text-sm' />
						</a>
					</li>

					{/* my whatsApp section */}
					<li className='flex w-5/6 flex-col items-center justify-center gap-2 rounded-md bg-darkBlueMd py-5 text-white ease-in-out hover:scale-105 sm:w-full'>
						<BsWhatsapp className='h-auto w-7 lg:w-8' />
						<p className='text-lg font-semibold lg:text-xl'>WhatsApp</p>
						<p className='text-sm text-gray-300'>+98 9109231061</p>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://api.whatsapp.com/send?phone=+989109231061'
							className='mt-1 flex items-center justify-center text-sky-400 hover:animate-bounce hover:text-sky-500'>
							<p className='mr-0.5 text-sm lg:text-sm'>Send a message</p>
							<MdKeyboardArrowRight className='mt-1 text-sm' />
						</a>
					</li>
				</ul>

				{/* Contact me form including name and email and message inputs */}
				<form
					ref={form}
					onSubmit={sendEmail}
					className='mt-3 flex w-full flex-col items-center justify-center gap-3 text-sm text-white sm:mt-0 '>
					{/* user name input */}
					<input
						type='text'
						name='user_name'
						placeholder='Your Name'
						required
						className='w-5/6 rounded-md border-2 border-gray-700 bg-transparent p-2.5 outline-none focus:border-white sm:w-full md:p-3.5'
					/>

					{/* user email input */}
					<input
						type='email'
						name='user_email'
						required
						placeholder='Your Email'
						className='w-5/6 rounded-md border-2 border-gray-700 bg-transparent p-2.5 outline-none focus:border-white sm:w-full md:p-3.5'
					/>

					{/* user message input */}
					<textarea
						type='text'
						name='message'
						placeholder='Your Message...'
						required
						className='h-32 max-h-56 w-5/6 rounded-md border-2 border-gray-700 bg-transparent p-2.5 text-start outline-none focus:border-white sm:w-full md:p-3.5'
					/>

					{/* send message btn */}
					<button
						type='submit'
						className='w-5/6 rounded-md bg-sky-500 p-3 hover:bg-sky-600 sm:w-full md:p-3.5'>
						Send Message
					</button>

					{error && <p className='text-red-600'>{error}</p>}
				</form>
			</section>
		</section>
	);
};

export default ContactMe;
