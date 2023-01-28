import React from 'react'
import styles from '../styles/Home.module.css'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import EastIcon from '@mui/icons-material/East';
import Navbar from '../components/Navbar'

function LandingPageInfo() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    let boxShadow = {
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    };

  return (
    <div className="w-full bg-gray-300 scroll-smooth">
        <div style={boxShadow} class="w-full h-screen">
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                height="100vh"
                options={{
                    fullScreen: { enable: false },
                    background: {
                        color: {
                            value: "#000"
                            // value: "#F3F4F6",
                        },
                    },
                    fpsLimit: 180,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#63A4FF",
                        },
                        links: {
                            color: "#63A4FF",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div style={{ position:"absolute", top:"50%", left: "50%",  transform: 'translate(-50%, -50%)', width: "100%"}}>
                <div class='font-mono text-white'>
                    <h1 class='select-none text-2xl z-20 font-bold text-center lg:text-4xl '>Hello, I'm <span class='text-theme'>Prajyot Burbure.</span></h1> 
                    <p class="select-none text-center my-2 font-bold text-2xl lg:text-4xl">I'm a full-stack web developer</p>
                    <div>
                        <a href='#jump'>
                            <button className="block mx-auto border-2 px-4 py-2 mt-2 transition ease-in-out bg-blue-500 hover:scale-110 hover:bg-theme hover:text-white hover:border-theme">View my work <br />
                                <EastIcon sx={{ fontSize: 90 }} className="hover:rotate-90 transition duration-700 hover:bg-white hover:text-black hover:rounded-full"></EastIcon></button>
                        </a>
                    </div>
                </div>    
            </div>
        </div>
        <div id="jump" ></div>
        <Navbar />
    </div>
  )
}

export default LandingPageInfo;