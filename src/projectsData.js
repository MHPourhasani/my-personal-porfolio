// images
import shopping_cart_screenShot from './assets/img/shopping_cart_screenShot.jpg';
import expense_tracker_screenShot from './assets/img/expense-tracker_screenShot.png';
import snapp_clone_screenShot from './assets/img/snapp_clone_screenShot.png';
import basalam_clone_screenShot from './assets/img/basalam_clone_screenShot.jpg';

// icons
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss, SiJavascript, SiReact } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';

export const projectsData = [
	{
		id: 1,
		name: 'Shopping Carts',
		demoLink: 'https://shopping-carts-mhpourhasani.vercel.app/',
		githubLink: 'https://github.com/MHPourhasani/shopping-carts-react',
		image: shopping_cart_screenShot,
		description:
			'o This app is a project which user can see some products, sign up, login and add products to cart also manage cart. Implement by HTML, CSS, Tailwindcss and React.js. In this project I used json API for data and mongo db test on localhost. I working with Axios library for post and get data from the json data also i used react router dom and context. I used Formik library to form validation. This project has been implemented in a responsive design.',
		technologiesUsed: [
			<AiFillHtml5 className='h-5 w-5 text-orange-600' />,
			<DiCss3 className='h-5 w-5 text-blue-500' />,
			<SiTailwindcss className='h-5 w-5 text-sky-400' />,
			<SiReact className='h-5 w-5 text-sky-400' />,
		],
	},
	{
		id: 3,
		name: 'Expense Tracker',
		demoLink: 'https://expense-tracker-react-mhpourhasani.vercel.app/',
		githubLink: 'https://github.com/MHPourhasani/expense-tracker-react',
		image: expense_tracker_screenShot,
		description:
			'o This app is a project which allows you to monitor and categorize your expenses. Implement by HTML, CSS and React.js . This project has been implemented in a responsive design. You can see live in this link and also see source code on Github.',
		technologiesUsed: [
			<AiFillHtml5 className='h-5 w-5 text-orange-600' />,
			<DiCss3 className='h-5 w-5 text-blue-500' />,
			<SiTailwindcss className='h-5 w-5 text-sky-400' />,
			<SiReact className='h-5 w-5 text-sky-400' />,
		],
	},
	{
		id: 6,
		name: 'Todo List js',
		demoLink: 'https://todo-list-js-mhpourhasani.vercel.app/',
		githubLink: 'https://github.com/MHPourhasani/todo-list-js',
		image: null,
		description:
			'o	Implement by HTML, CSS and Javascript. This project has been implemented in a responsive design. You can see live in this link and also see source code on Github.',
		technologiesUsed: [
			<AiFillHtml5 className='h-5 w-5 text-orange-600' />,
			<DiCss3 className='h-5 w-5 text-blue-500' />,
			<SiTailwindcss className='h-5 w-5 text-sky-400' />,
			<SiJavascript className='h-5 w-5 text-yellow-400' />,
		],
	},
	{
		id: 7,
		name: 'Basalam Clone',
		demoLink: 'https://basalam-clone-mhpourhasani.vercel.app/',
		githubLink: 'https://github.com/MHPourhasani/basalam-clone',
		image: basalam_clone_screenShot,
		description:
			'o	Implement by HTML, Sass and Javascript. This project has been implemented in a responsive design. You can see live in this link and also see source code on Github.',
		technologiesUsed: [
			<AiFillHtml5 className='h-5 w-5 text-orange-600' />,
			<DiCss3 className='h-5 w-5 text-blue-500' />,
			<FaSass className='h-5 w-5 text-pink-500' />,
		],
	},
	{
		id: 8,
		name: 'Snapp Clone',
		demoLink: 'http://snapp-clone-mhpourhasani.vercel.app/',
		githubLink: 'https://github.com/MHPourhasani/snapp-clone',
		image: snapp_clone_screenShot,
		description:
			'o	Implement by HTML, Css and Javascript. This project has been implemented in a responsive design. You can see live in this link and also see source code on Github.',
		technologiesUsed: [
			<AiFillHtml5 className='h-5 w-5 text-orange-600' />,
			<DiCss3 className='h-5 w-5 text-blue-500' />,
			<SiTailwindcss className='h-5 w-5 text-sky-400' />,
		],
	},
];
