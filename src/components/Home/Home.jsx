import React from 'react';
import heroImg from '../../assets/images/hero.png';
import classesImg from '../../assets/images/classes.png';
import { BsFillPlayFill, BsCurrencyDollar } from 'react-icons/bs';
import { ImFilesEmpty } from 'react-icons/im';
import benifitImg1 from '../../assets/images/benifit1.png';
import benifitImg2 from '../../assets/images/benifit2.png';
import benifitImg3 from '../../assets/images/benifit3.png';

const Home = () => {
    return (
        <div>
            {/* hero section */}
            <div className='flex justify-between items-center mt-5'>
                <div className='flex-1'>
                    <h1 className='text-5xl font-bold text-indigo-500 leading-tight'>
                        Best online platform <br /> for Learning
                    </h1>
                    <p className='text-sm text-gray-600 my-5'>
                        It’s time to step up to the plate and get passionate about your work. Commit to making eLearning courses that don't bore people to tears, but instead inspire and motivate them to learn a new skill, change a certain behavior, or improve their performance.
                    </p>
                    <div className='flex mt-8'>
                        <button className='btn-theme inline-block shadow-xl mr-5'>Join for free</button>
                        <button className='border px-6 py-3 text-indigo-500 hover:bg-gray-200 shadow-xl font-medium rounded-lg flex items-center gap-2'><BsFillPlayFill className='h-6 w-6' /> Learn more</button>
                    </div>
                </div>
                <img className='flex-1' src={heroImg} alt="" />
            </div>
            {/*  */}
            {/* pricing section */}
            <div className='w-[90%] mx-auto flex gap-12 my-16'>
                <div className='flex-1 text-white flex p-5 gap-4 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-200'>
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
                <div className='flex-1 text-white flex p-5 gap-4 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-200'>
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
            {/*  */}
            <div className='w-[90%] mx-auto mt-28'>
                <div className='flex gap-12 justify-between items-center mb-16'>
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
                <div className='flex gap-12 justify-between items-center mb-16'>
                    <div className='flex-1'>
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
                <div className='flex gap-12 justify-between items-center mb-16'>
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
            {/* <div className='flex justify-between items-center mt-5'>
                <img className='flex-1' src={classesImg} alt="" />
                <div className='flex-1'>
                    <h1 className='text-5xl font-bold text-indigo-500 leading-tight'>
                        Best online platform <br /> for Learning
                    </h1>
                    <p className='text-sm text-gray-600 my-5'>
                        It’s time to step up to the plate and get passionate about your work. Commit to making eLearning courses that don't bore people to tears, but instead inspire and motivate them to learn a new skill, change a certain behavior, or improve their performance.
                    </p>
                    <div className='flex mt-8'>
                        <button className='btn-theme inline-block shadow-xl mr-5'>Join for free</button>
                        <button className='border px-6 py-3 text-indigo-500 hover:bg-gray-200 shadow-xl font-medium rounded-lg flex items-center gap-2'><BsFillPlayFill className='h-6 w-6' /> Learn more</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Home;