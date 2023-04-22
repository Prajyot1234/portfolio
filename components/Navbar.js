import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AboutMeSection from './AboutMeSection';
import PortfolioSection from './PortfolioSection';
import ContactMeSection from './ContactMeSection';
import ResumeSection from './ResumeSection';

function Navbar() {
  const [menu,setMenu] = useState(false);
  const OpenMenu = () => setMenu(!menu);

  return (
    <div class="w-full font-mono h-screen text-white">
        <div class="w-full border-b-2 max-w-7xl mx-auto lg:w-11/12 ">
            <div class="flex justify-between p-3">
                <div className='font-semibold uppercase'>
                    <h2 className='text-xl select-none font-extrabold cursor-pointer hover:text-theme duration-500'>
                        <span className='text-theme font-mono'>P</span>rajyot
                    </h2>
                </div>
                <div class="cursor-pointer">
                    <MenuIcon onClick={OpenMenu} className='transition-all ease-in-out duration-500' />
                    {
                        menu && (<div className="fixed bg-black border-slate-800 ease-out top-0 right-0 bottom-0 w-80 z-50 list-none p-5 flex flex-col text-start border-2 transition-transform duration-1000 lg:w-96">
                           
                            <li className="text-right p-3">
                                <CloseIcon onClick={OpenMenu} />
                            </li>

                            <a href="#about">
                                <li className='text-left font-semibold uppercase p-3 hover:cursor-pointer hover:text-theme duration-500'>
                                    <p className='ml-1'>About</p>
                                    <hr className='mt-1' />
                                </li>
                            </a>
                            <a href="#portfolio">
                                <li className='text-left font-semibold uppercase p-3 hover:cursor-pointer hover:text-theme duration-500'>
                                    <p className='ml-1'>PortFolio</p>
                                    <hr className='mt-1' />
                                </li>
                            </a>
                            <a href="#resume">
                                <li className='text-left font-semibold uppercase p-3 hover:cursor-pointer hover:text-theme duration-500'>
                                    <p className='ml-1'>Resume</p>
                                    <hr className='mt-1' />
                                </li>
                            </a>
                            <a href="#contact">
                                <li className='text-left font-semibold uppercase p-3 hover:cursor-pointer hover:text-theme duration-500'>
                                    <p className='ml-1'>contact</p>
                                    <hr className='mt-1' />
                                </li>
                            </a>
                        </div>)
                    }
                </div>
            </div>
        </div>
        <div id="about">
            <AboutMeSection />
        </div>
        <div id="portfolio">
            <PortfolioSection />
        </div>
        <div id="resume">
            <ResumeSection />
        </div>
        <div id="contact">
            <ContactMeSection />
        </div>
    </div>
  )
}

export default Navbar;