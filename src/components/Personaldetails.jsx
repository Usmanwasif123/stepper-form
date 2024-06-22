import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Personaldetails = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here if needed
    navigate('/submit');
  };

  const handlePhoneChange = (e) => {
    // Validate input to allow only up to 12 digits
    const inputPhone = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (inputPhone.length <= 11) {
      setPhone(inputPhone);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center container md:w-1/2 mx-auto'>
      <span className="font-semibold capitalize mb-5 font-Mont text-[#051011] text-xl">step # 2</span>
      <h1 className='font-semibold text-[#051011] mb-1 text-2xl capitalize'>details</h1>
      <p className='text-center initial font-semibold text-[#6B7280] text-md'>We’re thrilled at the opportunity to help you grow your business online.
        <br/> Please let us know the best way to reach you.</p>
      <div className='flex flex-col justify-center font-[Lato] mt-2 text-[#848482]'>
        <form onSubmit={handleSubmit} className="space-y-2 space-x-0 mx-5 font-[Lato] font-semibold text-md">
          <div>
            <label htmlFor="name" className="block mb-2 text-[#051011]">Name</label>
            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-[#051011] 
              block w-full p-2.5" required />
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div className='flex flex-col m-1'>
              <label htmlFor="email" className="block mb-2 mx-1 text-[#051011]">Email</label>
              <input type="email" id="email" className="block p-3 w-full shadow-sm bg-gray-50 border border-gray-300 text-[#051011] 
              block w-full p-2.5" required />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="phone" className="block mb-2 mx-1 text-[#051011]">Phone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="block p-3 w-full shadow-sm bg-gray-50 border border-gray-300 text-[#051011] 
              block w-full p-2.5"
                maxLength={12}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-[#051011] dark:text-gray-400">Anything else you’d like to share?</label>
            <textarea id="message" rows="6" className="block p-2.5 w-full shadow-sm bg-gray-50 border border-gray-300 text-[#051011] 
              block w-full p-2.5"></textarea>
          </div>
          <div className='flex justify-center'>
            <button type="submit" className="py-3 px-5 text-center text-white bg-[#019F44]">
              Send Request
            </button>
          </div>
        </form>
        <div className='flex justify-center items-center gap-2 mt-1'>
          <img src='https://i.ibb.co/j8xmv4Y/icon.png' className='h-5 w-5' alt='lock' />
          <p className='flex  items-center text-md font-[Lato] text-[#6B7280] initial'>We promise never to share your information or spam your inbox</p>
        </div>
      </div>
    </div>
  );
}

export default Personaldetails;
