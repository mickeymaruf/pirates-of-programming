import React from 'react';
import heroImg from '../../assets/images/hero.png';
import { BsFillPlayFill, BsCurrencyDollar, BsBarChart, BsUiChecksGrid } from 'react-icons/bs';
import { ImFilesEmpty } from 'react-icons/im';
import benifitImg1 from '../../assets/images/benifit1.png';
import benifitImg2 from '../../assets/images/benifit2.png';
import benifitImg3 from '../../assets/images/benifit3.png';
import { AiOutlineLineChart, AiOutlineProject } from 'react-icons/ai';
import { BiDumbbell } from 'react-icons/bi';
import { TbCertificate } from 'react-icons/tb';

const Home = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center mt-5'>
                <div className='flex-1'>
                    <h1 className='text-4xl md:text-5xl font-bold text-indigo-500 leading-tight'>
                        Best online platform <br /> for Learning
                    </h1>
                    <p className='text-sm text-gray-600 my-5'>
                        It's time to step up to the plate and get passionate about your work. Commit to making eLearning courses that don't bore people to tears, but instead inspire and motivate them to learn a new skill, change a certain behavior, or improve their performance.
                    </p>
                    <div className='flex mt-8'>
                        <button className='btn-theme inline-block shadow-xl mr-5'>Join for free</button>
                        <button className='border px-6 py-3 text-indigo-500 hover:bg-gray-200 shadow-xl font-medium rounded-lg flex items-center gap-2'><BsFillPlayFill className='h-6 w-6' /> Learn more</button>
                    </div>
                </div>
                <img className='flex-1' src={heroImg} alt="" />
            </div>


            <div className='mt-16 mb-28'>
                <h1 className='text-4xl font-bold text-indigo-500 leading-tight text-center'>
                    What we offer
                </h1>
                <div className='h-1 w-10 bg-indigo-100 my-5 mx-auto'></div>
                <p className='text-sm text-gray-600 mt-5 mb-10 text-center md:w-8/12 xl:w-5/12 mx-auto'>
                    Online courses are convenient. The biggest advantage of our courses is that our courses is that our classroom and instructor.
                </p>
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-16'>
                    <div className='flex gap-4'>
                        <div className='text-indigo-500 mt-3 bg-gray-200 self-start p-3 rounded-full'>
                            <BsBarChart className='w-6 h-6' />
                        </div>
                        <div>
                            <h3 className='text-xl font-medium mb-1'>Beginner Courses</h3>
                            <p className='text-sm text-gray-600'>
                                Start instantly without having any pre exprerience. Beginner courses are very newbie friendly.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='text-indigo-500 mt-3 bg-gray-200 self-start p-3 rounded-full'>
                            <TbCertificate className='w-6 h-6' />
                        </div>
                        <div>
                            <h3 className='text-xl font-medium mb-1'>Completion Certificate</h3>
                            <p className='text-sm text-gray-600'>
                                Earn a certificate upon completion. After completing premium courses you'll get a shareable certificate.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='text-indigo-500 mt-3 bg-gray-200 self-start p-3 rounded-full'>
                            <AiOutlineProject className='w-6 h-6' />
                        </div>
                        <div>
                            <h3 className='text-xl font-medium mb-1'>Realworld Projects</h3>
                            <p className='text-sm text-gray-600'>
                                Realworld projects are more sufficient. It will help you to understand the work strategy of today's  world.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='text-indigo-500 mt-3 bg-gray-200 self-start p-3 rounded-full'>
                            <AiOutlineLineChart className='w-6 h-6' />
                        </div>
                        <div>
                            <h3 className='text-xl font-medium mb-1'>Progress Tracking</h3>
                            <p className='text-sm text-gray-600'>
                                How much you've done, where you're and how you're moving on will help you to track your progress.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='text-indigo-500 mt-3 bg-gray-200 self-start p-3 rounded-full'>
                            <BsUiChecksGrid className='w-6 h-6' />
                        </div>
                        <div>
                            <h3 className='text-xl font-medium mb-1'>Lessons Plans</h3>
                            <p className='text-sm text-gray-600'>
                                Learn at your own schedule. You'll be able to select your own schedule according your time and plans.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='text-indigo-500 mt-3 bg-gray-200 self-start p-3 rounded-full'>
                            <BiDumbbell className='w-6 h-6' />
                        </div>
                        <div>
                            <h3 className='text-xl font-medium mb-1'>Teacher Training</h3>
                            <p className='text-sm text-gray-600'>
                                We have a teacher confession every week to train teachers to grow knowledge with day to day lessons.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='lg:w-[90%] mx-auto mt-28'>
                <div className='md:flex gap-12 justify-between items-center mb-16'>
                    <div className='flex-1'>
                        <img className='w-80 ml-auto mr-8 mb-3' src={benifitImg1} alt="" />
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-3xl font-bold text-indigo-500 leading-tight'>
                            Project Based Learning
                        </h1>
                        <div className='h-1 w-10 bg-indigo-100 my-5'></div>
                        <h3 className='font-bold'>To give students the opportunity to develop knowledge and skills through engaging projects</h3>
                        <p className='text-sm text-gray-600 mt-5'>
                            Deeper engagement and interaction with learning content.
                            Encouragement of higher order thinking and problem-solving skills.
                            Development of peer and professional networks.
                            Engagement with real life projects.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-12 justify-between items-center mb-16'>
                    <div className='flex-1 order-last md:order-first'>
                        <h1 className='text-3xl font-bold text-indigo-500 leading-tight'>
                            Classroom Lessons
                        </h1>
                        <div className='h-1 w-10 bg-indigo-100 my-5'></div>
                        <h3 className='font-bold'>To gain students knowledge and clearing their concepts about their lessons, classroom is the best place</h3>
                        <p className='text-sm text-gray-600 mt-5'>
                            We help students pursue their passion for learning. Thousands of 5-star rated teachers with background checks are teaching students with live classes, online lessons, and supportive discussion.
                        </p>
                    </div>
                    <div className='flex-1'>
                        <img className='w-80 ml-auto mr-8 mb-3' src={benifitImg2} alt="" />
                    </div>
                </div>
                <div className='md:flex gap-12 justify-between items-center mb-16'>
                    <div className='flex-1'>
                        <img className='w-80 mx-auto mb-3' src={benifitImg3} alt="" />
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-3xl font-bold text-indigo-500 leading-tight'>
                            Instant Support
                        </h1>
                        <div className='h-1 w-10 bg-indigo-100 my-5'></div>
                        <h3 className='font-bold'>We are 24/7 available for students care and support them live and help them as soon as possible</h3>
                        <p className='text-sm text-gray-600 mt-5'>
                            Online courses are convenient. The biggest advantage of our courses is that our classroom and instructor (theoretically) are available 24 hours a day. They will clear your concepts.
                        </p>
                    </div>
                </div>
            </div>


            <div className='sm:w-[90%] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 my-24'>
                <div className='flex-1 text-white flex py-5 md:py-8 lg:py-5 p-5 gap-4 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-200'>
                    <div className='text-indigo-500 mt-3 bg-gray-200 self-start p-3 rounded-full'>
                        <ImFilesEmpty className='w-6 h-6' />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium mb-1'>Free Courses</h3>
                        <p className='text-sm text-indigo-100'>
                            Top 20 courses among our 1350+ free online courses by experts and From Basic to Intermediate, We have thousands of free online courses.
                        </p>
                    </div>
                </div>
                <div className='flex-1 text-white flex py-5 md:py-8 lg:py-5 p-5 gap-4 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-200'>
                    <div className='text-indigo-500 mt-3 bg-gray-200 self-start p-3 rounded-full'>
                        <BsCurrencyDollar className='w-6 h-6' />
                    </div>
                    <div>
                        <h3 className='text-xl font-medium mb-1'>Premium Courses</h3>
                        <p className='text-sm text-indigo-100'>
                            Premium Knowledge courses cover the toughest topics and go into the more detailed questions. To really get you to that top grade you want to practice.
                        </p>
                    </div>
                </div>
            </div>

            <div className='sm:w-[90%] mx-auto mb-20 xl:flex text-center xl:text-left'>
                <div className='flex-1'>
                    <h1 className='text-3xl font-bold text-indigo-400 leading-tight'>
                        Ready to get started?
                    </h1>
                    <p className='text-gray-600 opacity-75 font-medium text-xl mt-5'>
                        Get in touch, or create an account
                    </p>
                </div>
                <div className='flex-1 flex mt-8 justify-center gap-5'>
                    <button className='px-6 py-3 bg-indigo-500 text-white shadow-xl font-medium rounded-full flex items-center gap-2 uppercase'>Create Account <BsFillPlayFill className='h-3 w-3' /></button>
                    <button className='border px-6 py-3 text-indigo-500 hover:bg-gray-200 shadow-xl font-medium rounded-full flex items-center gap-2'>Contact Us <BsFillPlayFill className='h-4 w-4' /></button>
                </div>
            </div>

        </div>
    );
};

export default Home;