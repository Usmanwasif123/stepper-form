import React from 'react'
import { useNavigate } from 'react-router-dom';
import Stepper from './Stepper';

const Monthlybudget = () => {

    const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <div className='flex flex-col justify-center items-center mt-10 container md:w-1/2 mx-auto'>
    <span className="font-semibold capitalize mb-5 font-Mont text-[#051011] text-xl">step # 1</span>
    <h1 className='font-semibold initial text-[#051011] mb-5 text-2xl' >What is your monthly digital marketing budget?</h1>
    <div className='flex flex-col justify-center font-[Lato] font-medium mt-5 text-[#848482]'>
        <button className='border-2 border-white hover:border-[#019F44] bg-[#FFFFFF] px-20 py-3 mb-5 rounded-md' 
        onClick={() => handleNavigation('/personal-details')}>{'<'} $1,000/mo</button>
        <button className='border-2 border-white hover:border-[#019F44] bg-[#FFFFFF] px-20 py-3 mb-5 rounded-md'
        onClick={() => handleNavigation('/personal-details')}
        >$1,000 - $2,000</button>
        <button className='border-2 border-white hover:border-[#019F44] bg-[#FFFFFF] px-20 py-3 mb-5 rounded-md'
        onClick={() => handleNavigation('/personal-details')}
        >$2,000 - $5,000</button>
        <button className='border-2 border-white hover:border-[#019F44] bg-[#FFFFFF] px-20 py-3 mb-5 rounded-md'
        onClick={() => handleNavigation('/personal-details')}
        >$5,000 - $10,000</button>
        <button className='border-2 border-white hover:border-[#019F44] bg-[#FFFFFF] px-20 py-3 mb-5 rounded-md'
        onClick={() => handleNavigation('/personal-details')}
        >$10,000 - $25,000</button>
        <button className='border-2 border-white hover:border-[#019F44] bg-[#FFFFFF] px-20 py-3 mb-5 rounded-md'
        onClick={() => handleNavigation('/personal-details')}
        >$25,000 +</button>
    </div>
    </div>
  )
}

export default Monthlybudget
