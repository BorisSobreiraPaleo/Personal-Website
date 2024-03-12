import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from 'react';

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
    const handleResize = () => {
      setIsSmallScreen(window.innerHeight < 590);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {
        isVisible && (
          <div onClick={scrollToTop}
            className={`
              ${isSmallScreen ?
                'fixed bottom-8 right-20 cursor-pointer z-50 p-3 rounded-full dark:bg-[#F4F4F9] bg-[#03396c] border border-[#b2cddf] hover:scale-110 ease-in duration-300'
              :
                'fixed bottom-8 right-4 cursor-pointer z-50 p-3 rounded-full dark:bg-[#F4F4F9] bg-[#03396c] border border-[#b2cddf] hover:scale-110 ease-in duration-300'
              }
            `}
          >
            <FaArrowUp className="text-[#F4F4F9] dark:text-[#06080a]"/>
          </div>
        )
      }
    </>
  )
}

export default GoTop;
