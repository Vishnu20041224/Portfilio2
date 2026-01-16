import React from 'react'
import { styles } from "../style";
import { Link } from 'react-router-dom';

const Fotter = () => {
    return (
        <div className='text-white  !max-w-7xl !mx-auto !px-6 !py-10'>
            {/* header */}
            <div className=''>
                <h2 className={`${styles.sectionHeadText}`}>Let's Connect!.</h2>
            </div>
            {/* body */}
            <div className='!flex !flex-wrap !justify-between !gap-5'>
                <div>
                    <h1 className='text-2xl font-bold !mb-4 !mt-2'>
                        <a href="#work">Projects</a>
                    </h1>

                    <ul>
                        <li className='!pb-2'>
                            <Link to="https://vishnu-ecommerce-frontend.onrender.com/">E-commerce Platform</Link>
                        </li>
                        <li className='!pb-2'>
                            <Link to="https://vishnu-gym.vercel.app/">Gym Management System</Link>
                        </li>
                        <li className='!pb-2'>
                            <Link to="https://vsecommerce.vercel.app/">E-Commerce</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-bold !mb-4 !mt-2'>About</h1>
                    <ul>
                        <li className='!pb-2'>
                            <a href="#about">My Story</a>
                        </li>
                        <li className='!pb-2'>
                            <a href="#work">Work</a>
                        </li>
                        <li className='!pb-2'>
                            <a href="#contact">Direct Mail </a>
                        </li>
                        <li className='!pb-2'>
                            <a
                                href="/Vishnu Shankar MERN Resume.pdf"
                                download
                                className="hover:underline"
                            >
                                Download Resume
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-bold !mb-4 !mt-2'>Connect</h1>
                    <ul>
                        <li className='!pb-2'>
                            +91 91760 17127
                        </li>
                        <li className='!pb-2'>
                            Chennai, TamilNadu , India
                        </li>
                        <li className='!pb-2 text-blue-300'>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=rhvishnushankar@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                rhvishnushankar@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Fotter

