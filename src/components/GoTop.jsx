import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from 'react';

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {
        isVisible && (
          <div onClick={scrollToTop} className='fixed bottom-4 right-4 cursor-pointer z-50 p-3 rounded-full dark:bg-[#F4F4F9] bg-[#03396c] border border-[#b2cddf] hover:scale-110 ease-in duration-300' >
            <FaArrowUp className="text-[#F4F4F9] dark:text-[#06080a]"/>
          </div>
        )
      }
    </>
  )
}

export default GoTop;
