import React, { useState, useEffect } from 'react';

const Stepper = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate border color and fill based on currentPage
  const getBorderStyle = () => {
    if (currentPage === 1) {
      return {
        borderColor: '#019F44',
        borderStyle: 'solid',
        borderWidth: '4px 0 0 4px', // Top and left borders filled
      };
    } else if (currentPage === 2) {
      return {
        borderColor: '#019F44',
        borderStyle: 'solid',
        borderWidth: '4px 2px 0 4px', // Top, right, and left borders filled
      };
    } else if (currentPage === 3) {
      return {
        borderColor: '#019F44',
        borderStyle: 'solid',
        borderWidth: '4px 2px 4px 4px', // Top, right, bottom, and left borders filled
      };
    } else {
      // Handle cases beyond currentPage 3 (if needed)
      return {
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: '4px',
      };
    }
  };

  useEffect(() => {
    // Simulate moving to the next page after some time
    const timer = setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 2000); // Adjust timing as needed

    // Clear timer on component unmount or when currentPage changes
    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div className='mx-0 p-0 flex justify-between'>
      <div
        className='flex-auto md:w-full'
        style={getBorderStyle()}
      ></div>
    </div>
  );
};

export default Stepper;
