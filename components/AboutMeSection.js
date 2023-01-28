import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import DevicesIcon from '@mui/icons-material/Devices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import {
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

  
function AboutMeSection() {
  let boxShadow = {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
  };
  return (
    <div className='font-mono'>
        <div className='w-screen pt-20'>
            <div className='bg-gradient-to-r from-cyan-500 to-theme text-center p-20'>
                <h1 className='text-5xl uppercase text-white'>About</h1>
                <h2 className='text-2xl text-white'>Small Intro</h2>
                <hr className='w-14 border-2 mx-auto mt-2' />
            </div>
        </div>
        <div className='w-full bg-black'>
            <div className='w-full max-w-7xl mx-auto lg:w-11/12'>
                <div className='mt-14 mb-14 text-center'>
                    <div className=''>
                        <h2 className='text-2xl font-bold text-faint'>Who I&apos;m I?</h2>
                        <p className='text-faint w-11/12 py-4 mx-auto lg:w-5/12'>I&apos;m a Front-End Developer for <a target="_blank" className='text-theme' href='https://kloudspot.com/'>Kloudspot</a> in Bangalore, India.
                            I have serious passion for frontend Development(<span className='text-theme'> ReactJS | javascript | NextJS </span>) as well as backend Development(<span className='text-theme'> NodeJS</span>), 
                            creating intuitive, dynamic user experiences and competitive programing(<span className='text-theme'>cpp</span>).<br/>
                            <a target="_blank"  rel="noreferrer" href='https://www.linkedin.com/in/prajyot-burbure-6b8643190/' ><span className='text-theme'>Hire Me!!</span></a>
                        </p>
                    </div>
                </div>
                <div className='mt-14 mb-14 select-none'>
                    <div className='grid grid-cols-1 gap-10 mx-6 lg:grid-cols-4'>
                        <div style={boxShadow} className='pb-6 rounded-md hover:shadow-xl hover:cursor-pointer duration-1000'>
                            <div className='bg-theme w-fit p-7 mt-8 mx-auto rounded-full text-white'>
                                <ElectricBoltIcon />
                            </div>
                            <h2 className='text-xl mt-2 font-medium text-faint text-center'>Fast</h2>
                            <p className='text-center mx-6 text-faint mt-2'>Fast load times and lag free interaction, my highest priority.</p>
                        </div>
                        <div style={boxShadow} className='pb-6 rounded-md hover:shadow-2xl hover:cursor-pointer duration-1000'>
                            <div className='bg-theme w-fit p-7 mt-8 mx-auto rounded-full text-white'>
                                <DevicesIcon />
                            </div>
                            <h2 className='text-xl mt-2 font-medium text-faint text-center'>Responsive</h2>
                            <p className='text-center mx-6 text-faint mt-2'>My layouts will work on any device, big or small.</p>
                        </div>
                        <div style={boxShadow} className='pb-6 rounded-md hover:shadow-2xl hover:cursor-pointer duration-1000'>
                            <div className='bg-theme w-fit p-7 mt-8 mx-auto rounded-full text-white'>
                                <LightbulbIcon />
                            </div>
                            <h2 className='text-xl mt-2 font-medium text-faint text-center'>Intuitive</h2>
                            <p className='text-center mx-6 text-faint mt-2'>Strong preference for easy to use, intuitive UX/UI.</p>
                        </div>
                        <div style={boxShadow} className='pb-6 rounded-md hover:shadow-2xl hover:cursor-pointer duration-1000'>
                            <div className='bg-theme w-fit p-7 mt-8 mx-auto rounded-full text-white'>
                                <RocketLaunchIcon />
                            </div>
                            <h2 className='text-xl mt-2 font-medium text-faint text-center'>Dynamic</h2>
                            <p className='text-center mx-6 text-faint mt-2'>Websites/Webapps don't have to be static, I love making pages come to life.</p>
                        </div>
                    </div>
                </div>
                <div className='text-center text-faint font-bold text-xl my-4'>
                    <h1>Technology Stack</h1>
                </div>
                <div className='mx-auto lg:mx-40'>
                    <div className='grid grid-cols-2 mx-auto gap-6 p-5 text-faint pb-16 lg:grid-cols-4'>
                        <div className='flex w-36 h-36 mx-auto justify-center items-center'>
                            <CircularProgressbarWithChildren
                                value={85}
                                styles={buildStyles({
                                    textSize: "14px",
                                    pathColor: '#63A4FF',
                                    
                                })}
                                
                            >
                                <p>85 %</p>
                                <p>HTML</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className='flex w-36 h-36 mx-auto justify-center items-center'>
                            <CircularProgressbarWithChildren
                                value={80}
                                styles={buildStyles({
                                    textSize: "14px",
                                    pathColor: '#63A4FF',
                                    
                                })}
                                
                            >
                                <p>80 %</p>
                                <p>CSS</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className='flex w-36 h-36 mx-auto justify-center items-center'>
                            <CircularProgressbarWithChildren
                                value={80}
                                styles={buildStyles({
                                    textSize: "14px",
                                    pathColor: '#63A4FF',
                                    
                                })}
                                
                            >
                                <p>80 %</p>
                                <p>javascript</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className='flex w-36 h-36 mx-auto justify-center items-center'>
                            <CircularProgressbarWithChildren
                                value={80}
                                styles={buildStyles({
                                    textSize: "14px",
                                    pathColor: '#63A4FF',
                                    
                                })}
                                
                            >
                                <p>80 %</p>
                                <p>ReactJS</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className='flex w-36 h-36 mx-auto justify-center items-center'>
                            <CircularProgressbarWithChildren
                                value={80}
                                styles={buildStyles({
                                    textSize: "14px",
                                    pathColor: '#63A4FF',
                                    
                                })}
                                
                            >
                                <p>80 %</p>
                                <p>NextJS</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className='flex w-36 h-36 mx-auto justify-center items-center'>
                            <CircularProgressbarWithChildren
                                value={70}
                                styles={buildStyles({
                                    textSize: "14px",
                                    pathColor: '#63A4FF',
                                    
                                })}
                                
                            >
                                <p>70 %</p>
                                <p>NodeJS</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className='flex w-36 h-36 mx-auto justify-center items-center'>
                            <CircularProgressbarWithChildren
                                value={50}
                                styles={buildStyles({
                                    textSize: "14px",
                                    pathColor: '#63A4FF',
                                    
                                })}
                                
                            >
                                <p>50 %</p>
                                <p>Angular</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className='flex w-36 h-36 mx-auto justify-center items-center'>
                            <CircularProgressbarWithChildren
                                value={70}
                                styles={buildStyles({
                                    textSize: "14px",
                                    pathColor: '#63A4FF',
                                    
                                })}
                                
                            >
                                <p>70 %</p>
                                <p>C++</p>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='border-2 w-2/3 mx-auto mt-10' />
        </div>
    </div>
  )
}

export default AboutMeSection