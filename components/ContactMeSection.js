import React,{ useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useAlert } from "react-alert";
import FavoriteIcon from '@mui/icons-material/Favorite';

function ContactMeSection() {
  const emailform = useRef();

  //for alert
  const alert = useAlert();

  const [ name ,setName ] = useState('');
  const [ email ,setEmail ] = useState('');
  const [ message ,setMessage ] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(emailform.current);
    emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        emailform.current, 
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      ).then((result) => {
          setName('');
          setEmail('');
          setMessage('');
          alert.success("Mail sent successfully!");
          e.target.reset();
      }, (error) => {
          alert.error(error.text,"!");
      });
  };

  //year
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className='py-20 bg-black'>
        <div className='w-screen'>
            <div className='bg-gradient-to-r from-cyan-500 to-theme text-center p-20'>
                <h1 className='text-5xl uppercase text-white'>Contact Me</h1>
                <hr className='w-14 border-2 mx-auto mt-2' />
            </div>
        </div>
        <div>
        <div className='w-full bg-black'>
          <div className='w-full max-w-7xl mx-auto lg:w-11/12'>
            <div className='mt-10'>
              <form ref={emailform} onSubmit={sendEmail} className='font-mono mx-auto w-11/12 lg:w-7/12'>

                  <div className='flex flex-col lg:flex-row '>
                    <div className='flex-1'>
                        <input placeholder='NAME' type="text" name='user_name' onChange={ (e) =>setName(e.target.value) } className='bg-black w-11/12 p-1 border-b-2 text-white border-form outline-none focus:text-white focus:border-white ' ></input>
                        { name == '' && <p className='text-form p-1 '>Please enter your name</p> }
                    </div>
                    <div className='flex-1'>
                        <input placeholder='EMAIL' type="email" name='user_email' onChange={ (e) =>setEmail(e.target.value) } className='bg-black w-11/12 p-1 border-b-2 text-white border-form outline-none focus:text-white focus:border-white' ></input>
                        { email == '' && <p className='text-form p-1 '>Please enter a valid email address</p> }
                    </div>
                  </div>

                  <div className='mt-4 lg:mt-10'>
                    <textarea placeholder='WRITE YOUR MESSAGE...' name='message' onChange={ (e) =>setMessage(e.target.value) }  className='bg-black w-11/12 p-1 border-b-2 h-36 text-white border-form outline-none focus:text-white focus:border-white'></textarea>
                    { message == '' && <p className='text-form p-1 '>Please enter a message</p> }
                  </div>

                  <button type='submit' value='Send' className='uppercase px-8 rounded-full mt-8 border-form hover:border-white duration-300 py-3 border-2'>Send message</button>
              </form>
            </div>
          </div>
          <hr className='border-2 w-2/3 mx-auto mt-10' />

          <div className='mt-20 text-center'>
            <h1 className='text-3xl'>Prajyot<span className='text-theme'>.</span></h1>
            <div className='mt-7 text-faint'>
              <div className='flex mx-auto w-fit'>
                <a target="_blank" href="https://www.instagram.com/prajyot_burbure/">
                  <h2 className='text-center uppercase cursor-pointer font-bold hover:text-white duration-1000'>instagram</h2>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/prajyot-burbure-6b8643190/">
                  <h2 className='text-center uppercase cursor-pointer font-bold hover:text-white duration-1000 ml-8'>linkedin</h2>
                </a>
                <a target="_blank" href="https://github.com/Prajyot1234">
                  <h2 className='text-center uppercase cursor-pointer font-bold hover:text-white duration-1000 ml-8'>github</h2>
                </a>
                <a target="_blank" href="https://leetcode.com/Prajyotb9/">
                  <h2 className='text-center uppercase cursor-pointer font-bold hover:text-white duration-1000 ml-8'>leetcode</h2>
                </a>
              </div>
              <div className='mt-5'>
                <p>Copyright © {year} All rights reserved | This website is made with <FavoriteIcon />  by <span className='text-white'>Prajyot</span><span className='text-theme'>.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMeSection