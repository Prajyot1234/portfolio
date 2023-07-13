import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';

function ResumeSection() {
  return (
    <div className='pt-20 font-mono bg-black'>
         <div className='w-screen'>
            <div className='bg-gradient-to-r from-cyan-500 to-theme text-center p-20'>
                <h1 className='text-5xl uppercase text-white'>Resume</h1>
                <h2 className='text-2xl text-white'>Work Experience & Education</h2>
                <hr className='w-14 border-2 mx-auto mt-2' />
            </div>
        </div>
        <div className='w-full bg-black'>
          <div className='w-full max-w-7xl mx-auto lg:w-11/12'>
            <div className='w-full m-auto mt-10 lg:w-3/4'>
                <div className='text-xs lg:text-lg'>
                    <h1 className='text-xl mb-5 ml-2'>
                    Work Experience
                    </h1>
                    <div className='flex mx-3 justify-between  lg:mx-10'>
                        <div>
                          <div>
                            <h1 className='text-lg lg:text-xl'>Software Engineer</h1>
                            <div className='flex mt-1'>
                                <div className='flex'>
                                  <ApartmentIcon className='text-white text-sm lg:text-2xl' /><p className='ml-1'>Kloudspot Inc.</p>
                                </div>
                                <div className='flex'>
                                  <LocationOnIcon className='ml-2 text-white text-sm lg:text-2xl' /><p className='ml-1'>Bangalore</p>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className=''>
                              <div className='flex justify-end'>
                                <p className='uppercase w-fit bg-theme text-theme bg-opacity-30	px-5 rounded-full font-bold py-1'>FullTime</p>
                              </div>
                              <p className='mt-1'> <CalendarMonthIcon className='mr-1 text-lg lg:text-2xl' />Feb 2022 - Present</p>
                          </div>
                        </div>
                    </div>
                    <hr className='border-1 w-11/12 mx-auto mt-3' />

                    <div className='flex mx-3 mt-5 justify-between  lg:mx-10'>
                        <div>
                          <div>
                            <h1 className='text-xl'>ReactJS Developer</h1>
                            <div className='flex mt-1'>
                                <div className='flex'>
                                  <ApartmentIcon className='text-white text-lg lg:text-2xl' /><p className='ml-1'>SuperSkool Inc.</p>
                                </div>
                                <div className='flex'>
                                  <LocationOnIcon className='ml-2 text-white text-lg lg:text-2xl' /><p className='ml-1'>Remote</p>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className=''>
                              <div className='flex justify-end'>
                                <p className='uppercase w-fit bg-theme text-theme bg-opacity-30	px-5 rounded-full font-bold py-1'>Internship</p>
                              </div>
                              <p className='mt-1'> <CalendarMonthIcon className='mr-1 text-lg lg:text-2xl' />Oct 2020 - Jan 2021</p>
                          </div>
                        </div>
                    </div>
                    <hr className='border-1 w-11/12 mx-auto mt-3' />
                </div>

                <div className='text-xs mt-8 lg:text-lg'>
                    <h1 className='text-xl mb-5 ml-2'>
                    Education
                    </h1>
                    <div className='flex mx-3 justify-between  lg:mx-10'>
                        <div>
                          <div>
                            <h1 className='text-xl'>Bachelor in Information Technology</h1>
                            <div className='flex mt-1'>
                                <div className='flex'>
                                  <SchoolIcon className='text-white text-lg lg:text-2xl' /><p className='ml-1'>SGBAU University.</p>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className=''>
                              <p className='mt-1'> <CalendarMonthIcon className='mr-1 text-lg lg:text-2xl' />June 2018 - July 2022</p>
                              <p className='flex justify-end'>Grade :- 9.3 SGPA</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <hr className='border-2 w-2/3 mx-auto mt-10' />
        </div>
    </div>
  )
}

export default ResumeSection