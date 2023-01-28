import React,{ useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 3,
};

function PortfolioSection() {

  //for final year 
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

   //for web chat
   const [open2, setOpen2] = useState(false);
   const handleOpen2 = () => setOpen2(true);
   const handleClose2 = () => setOpen2(false);

    //for covid tracker
    const [open3, setOpen3] = useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);


  return (
    <div className='pt-20 font-mono bg-black'>
        <div className='w-screen'>
            <div className='bg-gradient-to-r from-cyan-500 to-theme text-center p-20'>
                <h1 className='text-5xl uppercase text-white'>PortFolio</h1>
                <h2 className='text-2xl text-white'>My Latest Projects</h2>
                <hr className='w-14 border-2 mx-auto mt-2' />
            </div>
        </div>
        <div className='w-full bg-black'>
            <div className='w-full max-w-7xl mx-auto lg:w-11/12'>
              <div className='grid grid-cols-1 pt-20 pb-5 gap-10 lg:grid-cols-3'>
                <div className='p-6 text-center rounded-md shadow-2xl border-2 m-2 '>
                    <h1 className='uppercase text-2xl mb-4'>code-helper</h1>
                    <div className="w-full">
                        <img 
                            src={`/finalyearProject.png`}
                            height={100}
                            width={120}
                            className="w-full hover:cursor-pointer"
                            alt={`final year project landing`}
                        />
                    </div>
                    <div className='flex justify-center mt-4'>
                        <div>
                            <button onClick={handleOpen1} className='border-2 uppercase border-white px-4 py-2 rounded-full hover:translate-y-2 duration-500 hover:font-sm'>View Details</button>
                        </div>
                        <div className='ml-2'>
                            <a target="_blank" rel="noreferrer"  href='https://final-year-project-zeta.vercel.app/' >
                                <button className='border-2 uppercase border-white px-4 py-2 rounded-full hover:translate-y-2 duration-500 hover:font-sm'>Visit website</button>
                            </a>
                        </div>
                    </div>
                    <Modal
                        open={open1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className='text-white w-3/4 font-mono lg:w-96' sx={style}>
                            <div className='flex justify-end'>
                                <CloseIcon
                                    onClick={handleClose1}
                                    className='hover:cursor-pointer'
                                />
                            </div>
                            <div className='text-center'>
                                <div>
                                    <h1 className='uppercase font-bold text-xl'>code-helper</h1>

                                    <table className='border-collapse border-white'>
                                        <tr>
                                            <td>
                                            Frontend- 
                                            </td>
                                            <td>
                                                <p className='p-2 '>
                                                    NextJS , CSS(styled component), material-UI etc.
                                                </p>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Backend-
                                            </td>
                                            <td>
                                                <p className='p-2'>
                                                    NodeJS, firebase API, jdoodle api etc.
                                                </p>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Database-
                                            </td>
                                            <td>
                                                <p className='p-2'>
                                                    MongoDB, firebase firestore.
                                                </p>
                                                <hr />
                                            </td>
                                        </tr>
                                    </table>
                                        
                                    <p className='mt-4'>
                                        &emsp; Codehelper is project which is build for the purpose of making DSA easy. this project have it&apos;s own IDE which supports 10 differnt languages (c,c++,javascript,java etc), its have blog section where people can post their blogs etc.
                                    </p>
                                    <p className='text-theme text-xl mt-4'>Visit!! <a target="_blank" rel="noreferrer" href='https://final-year-project-zeta.vercel.app/'><LaunchIcon className='hover:cursor-pointer' sx={{ fontSize: '13px' }} /></a></p>                                  
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </div>
                <div className='p-6 text-center rounded-md shadow-2xl border-2 m-2 '>
                    <h1 className='uppercase text-2xl mb-4'>Web-Chat</h1>
                    <div className="w-full">
                        <img 
                            src={`/webchat.png`}
                            height={100}
                            width={120}
                            className="w-full hover:cursor-pointer"
                            alt={`final year project landing`}
                        />
                    </div>
                    <div className='flex justify-center mt-4'>
                        <div>
                            <button onClick={handleOpen2} className='border-2 uppercase border-white px-4 py-2 rounded-full hover:translate-y-2 duration-500 hover:font-sm'>View Details</button>
                        </div>
                        <div className='ml-2'>
                            <a target="_blank" rel="noreferrer" href="https://webchat-1g3o3voho-prajyot1234.vercel.app/">
                                <button className='border-2 uppercase border-white px-4 py-2 rounded-full hover:translate-y-2 duration-500 hover:font-sm'>Visit website</button>
                            </a>
                        </div>
                    </div>
                    <Modal
                        open={open2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className='text-white font-mono w-3/4 lg:w-96' sx={style}>
                            <div className='flex justify-end'>
                                <CloseIcon
                                    onClick={handleClose2}
                                    className='hover:cursor-pointer'
                                />
                            </div>
                            <div className='text-center'>
                                <div>
                                    <h1 className='uppercase font-bold text-xl'>Web-Chat</h1>

                                    <table className='border-collapse border-white'>
                                        <tr>
                                            <td>
                                            Frontend- 
                                            </td>
                                            <td>
                                                <p className='p-2 '>
                                                    NextJS , CSS(styled component), material-UI etc.
                                                </p>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Backend-
                                            </td>
                                            <td>
                                                <p className='p-2'>
                                                    firebase API
                                                </p>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Database-
                                            </td>
                                            <td>
                                                <p className='p-2'>
                                                    firebase firestore.
                                                </p>
                                                <hr />
                                            </td>
                                        </tr>
                                    </table>
                                        
                                    <p className='mt-4'>
                                        &emsp; Web-Chat is project which is build for the purpose of communicating with another person only with help of their gmail ID in this way we dont have to share any number and all.
                                    </p>
                                    <p className='text-theme text-xl mt-4'>Visit!! <a target="_blank" rel='noreferrer' href="https://webchat-1g3o3voho-prajyot1234.vercel.app/" ><LaunchIcon className='hover:cursor-pointer' sx={{ fontSize: '13px' }} /></a></p>                                  
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </div>
                <div className='p-6 text-center rounded-md shadow-2xl border-2 m-2 '>
                    <h1 className='uppercase text-2xl mb-4'>Covid-Info</h1>
                    <div className="w-full">
                        <img 
                            src={`/covidTracker.png`}
                            height={100}
                            width={120}
                            className="w-full hover:cursor-pointer"
                            alt={`final year project landing`}
                        />
                    </div>
                    <div className='flex justify-center mt-4'>
                        <div>
                            <button onClick={handleOpen3} className='border-2 uppercase border-white px-4 py-2 rounded-full hover:translate-y-2 duration-500 hover:font-sm'>View Details</button>
                        </div>
                        <div className='ml-2'>
                            <a target="_blank" rel="noreferrer" href="https://covid-info-607b0.web.app/">
                                <button className='border-2 uppercase border-white px-4 py-2 rounded-full hover:translate-y-2 duration-500 hover:font-sm'>Visit website</button>
                            </a>
                        </div>
                    </div>
                    <Modal
                        open={open3}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className='text-white font-mono w-3/4 lg:w-96' sx={style}>
                            <div className='flex justify-end'>
                                <CloseIcon
                                    onClick={handleClose3}
                                    className='hover:cursor-pointer'
                                />
                            </div>
                            <div className='text-center'>
                                <div>
                                    <h1 className='uppercase font-bold text-xl'>Covid-Info</h1>

                                    <table className='border-collapse border-white'>
                                        <tr>
                                            <td>
                                            Frontend- 
                                            </td>
                                            <td>
                                                <p className='p-2 '>
                                                    ReactJS , CSS(Vanilla CSS), material-UI etc.
                                                </p>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Backend-
                                            </td>
                                            <td>
                                                <p className='p-2'>
                                                    -
                                                </p>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            Database-
                                            </td>
                                            <td>
                                                <p className='p-2'>
                                                    -
                                                </p>
                                                <hr />
                                            </td>
                                        </tr>
                                    </table>
                                        
                                    <p className='mt-4'>
                                        &emsp; Covid-Info is project which is build to get the updates about COVID situation like daily new cases,deaths and recovered in graphical as we as in number format.
                                    </p>
                                    <p className='text-theme text-xl mt-4'>Visit!! <a target="_blank" rel='noreferrer' href="https://covid-info-607b0.web.app/" ><LaunchIcon className='hover:cursor-pointer' sx={{ fontSize: '13px' }} /></a></p>                                  
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </div>
              </div>
            </div>
            <hr className='border-2 w-2/3 mx-auto mt-10' />
        </div>
    </div>
  )
}

export default PortfolioSection