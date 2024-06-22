import React from 'react'
import Stepper from '../components/Stepper';
import StepperControl from '../components/StepperControl';

const Home = () => {
  return (
    <div>
    <div className='md:w-full mx-auto shadow-xl pb-2 bg-white'>
      {/*Navigation controls */}
      <StepperControl />
      
    </div>
    {/*Stepper */}
    <div className='container horizontal mt-5'>
      <Stepper/>
      </div>
    </div>
  )
}

export default Home
