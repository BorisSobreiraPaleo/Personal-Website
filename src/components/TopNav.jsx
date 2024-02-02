import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import { useEffect } from "react";

const TopNav = () => {

  useEffect(() => {
    const listItem = document.querySelectorAll('#topBar ul > li > div');
    const bubbleTop = document.querySelector('#bubbleTop');

    listItem.forEach((item) => {
      item.addEventListener('mouseenter', handleTouchStart);
      item.addEventListener('mouseleave', handleTouchEnd);
      item.addEventListener('touchstart', handleTouchStart);
      item.addEventListener('touchend', handleTouchEnd);
    });

    function handleTouchStart(event) {
      const boundingRect = event.target.getBoundingClientRect();
      updateBubblePosition(boundingRect);
    }

    function handleTouchEnd() {
      bubbleTop.style.opacity = '0';
      bubbleTop.style.visibility = 'hidden';
    }

    function updateBubblePosition(boundingRect) {
      const { left, top, width, height } = boundingRect;
      bubbleTop.style.setProperty('--left', `${left}px`);
      bubbleTop.style.setProperty('--top', `${top}px`);
      bubbleTop.style.setProperty('--width', `${width}px`);
      bubbleTop.style.setProperty('--height', `${height}px`);
      bubbleTop.style.opacity = '1';
      bubbleTop.style.visibility = 'visible';
    }

    return () => {
      listItem.forEach((item) => {
        item.removeEventListener('mouseenter', handleTouchStart);
        item.removeEventListener('mouseleave', handleTouchEnd);
        item.removeEventListener('touchstart', handleTouchStart);
        item.removeEventListener('touchend', handleTouchEnd);
      });
    };
  }, []);

  return (
    <div id='topBar' className='absolute z-50 [&>ul>li>div]:flex [&>ul>li>div]:justify-center [&>ul>li>div]:items-center [&>ul>li>div]:text-center [&>ul>li>div]:rounded-full [&>ul>li>div]:shadow-lg [&>ul>li>div]:bg-[#005b96]/30 [&>ul>li>div]:dark:bg-white/30 [&>ul>li>div]:m-2 [&>ul>li>div]:p-4 [&>ul>li>div]:cursor-pointer [&>ul>li>div:hover]:scale-110 [&>ul>li>div]:ease-in [&>ul>li>div]:duration-300'>
      <div id="bubbleTop"
          className={`
            absolute bg-black/50 dark:bg-white/50 backdrop-blur-lg rounded-full
            left-[var(--left)] top-[var(--top)]
            w-[var(--width)] h-[var(--height)]
            transition-all duration-500 ease-in-out
            opacity-0 -z-10
          `}
        />
      <ul>
        <li>
          <LanguageSelector/>
        </li>
        <li>
          <ThemeSelector/>
        </li>
      </ul>
    </div>
  )
};

export default TopNav;
