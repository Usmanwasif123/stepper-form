import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

const StepperControl = () => {
    
  return (
    <div className='container flex justify-between mb-5'>
     {/* back button */}
     <button className='bg-white text-black text-md capitalize py-2 px-10 font-semibold cursor-pointer flex justify-start items-center'
     >
     <ArrowBackIcon   fontSize="small" className='mr-2'/>
     go back
     </button>
    
     {/* exit button */}
     <button className='bg-white text-black text-md capitalize py-2 px-10 font-semibold cursor-pointer flex justify-end items-center'>
     exit
     <CloseIcon  fontSize="small" className='ml-1 mr-2'/>
     </button>
    </div>
  )
}

export default StepperControl
