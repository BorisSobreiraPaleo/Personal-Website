import { useState, useEffect } from 'react'
import { MdPersonOutline, MdWorkOutline, MdOutlineInsertChart, MdMailOutline, MdOutlineMenu } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import useLanguage from '../languageContext/useLanguage';

const Sidenav = () => {
  const [nav, setNav] = useState(false)
  const [currentSection, setCurrentSection] = useState('');
  const { language } = useLanguage()
  
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-40%', threshold: 0 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const sectionId = section.id;
        const exceptionSectionId = 'footer';
        if (sectionId !== exceptionSectionId) {
          sectionObserver.observe(section);
        }
    });

    return () => {
      sections.forEach((section) => {
        const sectionId = section.id;
        const exceptionSectionId = 'footer';
        if (sectionId !== exceptionSectionId) {
          sectionObserver.unobserve(section);
        }
      });
    };
  }, []);

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const listItem = document.querySelectorAll('#navBar ul > li > a > div');
    const bubbleSide = document.querySelector('#bubbleSide');

    listItem.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        const { left, top, width, height } = item.getBoundingClientRect();
        const parentTop = bubbleSide.parentElement.getBoundingClientRect().top; // Obtener la posición del padre
        const transformedTop = top - parentTop; // Ajustar la posición con la transformación

        bubbleSide.style.setProperty('--left', `${left}px`);
        bubbleSide.style.setProperty('--top', `${transformedTop}px`);
        bubbleSide.style.setProperty('--width', `${width}px`);
        bubbleSide.style.setProperty('--height', `${height}px`);
        bubbleSide.style.opacity = '1';
        bubbleSide.style.visibility = 'visible';
      });

      item.addEventListener('mouseleave', () => {
        bubbleSide.style.opacity = '0';
        bubbleSide.style.visibility = 'hidden';
      });
    });

    return () => {
      listItem.forEach((item) => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  
  return (
    <div>
      <div onClick={handleNav} className='md:hidden fixed top-[138px] right-0 z-50 flex justify-center items-center text-center rounded-full shadow-lg bg-[#005b96]/30 dark:bg-white/30 mr-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
        <MdOutlineMenu size={25}/>
      </div>
      {
        nav ? (
          <div onClick={handleNav} className='fixed w-full h-screen dark:bg-[#005B96]/90 bg-white/90 flex flex-col justify-center items-center z-50
          [&>a]:w-[75%] [&>a]:rounded-full [&>a]:flex [&>a]:justify-center [&>a]:items-center [&>a]:shadow-lg [&>a]:m-2 [&>a]:p-4 [&>a]:cursor-pointer hover:[&>a]:scale-110 [&>a]:ease-in [&>a]:duration-300
          [&>a>div]:flex [&>a>div]:w-28 [&>a>div]:items-center
          [&>a>div>span]:flex [&>a>div>span]:flex-grow [&>a>div>span]:justify-center [&>a>div>span]:font-semibold [&>a>div>span]:text-[17px]
          '>
            <a
              href="#main"
              className={currentSection === 'main' ? 'bg-[#03396c] text-white' : 'bg-[#005b96]/30 dark:bg-[#B7CEE1]/80'}
            >
              <div>
                <MdPersonOutline size={25} />
                <span>{language === 'en' ? 'Profile' : 'Perfil'}</span>
              </div>
            </a>
            <a
              href="#career"
              className={currentSection === 'career' ? 'bg-[#03396c] text-white' : 'bg-[#005b96]/30 dark:bg-[#B7CEE1]/80'}
            >
              <div>
                <MdWorkOutline size={25} />
                <span>{language === 'en' ? 'Career' : 'Carrera'}</span>
              </div>
            </a>
            <a
              href="#education"
              className={currentSection === 'education' ? 'bg-[#03396c] text-white' : 'bg-[#005b96]/30 dark:bg-[#B7CEE1]/80'}
            >
              <div>
                <PiStudentFill size={25} />
                <span>{language === 'en' ? 'Education' : 'Educación'}</span>
              </div>
            </a>
            <a
              href="#projects"
              className={currentSection === 'projects' ? 'bg-[#03396c] text-white' : 'bg-[#005b96]/30 dark:bg-[#B7CEE1]/80'}
            >
              <div>
                <MdOutlineInsertChart size={25} />
                <span>{language === 'en' ? 'Projects' : 'Proyectos'}</span>
              </div>
            </a>
            <a
              href="#contact"
              className={currentSection === 'contact' ? 'bg-[#03396c] text-white' : 'bg-[#005b96]/30 dark:bg-[#B7CEE1]/80'}
            >
              <div>
                <MdMailOutline size={25} />
                <span>{language === 'en' ? 'Contact' : 'Contacto'}</span>
              </div>
            </a>
          </div>
        )
        : (
          ''
        )
      }


      <div className='md:block hidden fixed z-50 top-1/2 transform -translate-y-1/2 right-0'>
        <div id="bubbleSide"
          className={`
            fixed ml-2 bg-black/50 dark:bg-white/50 backdrop-blur-lg rounded-full
            right-[var(--right)] top-[var(--top)]
            w-[var(--width)] h-[var(--height)]
            transition-all duration-500 ease-in-out
            opacity-0 -z-10
          `}
        />
        <div id='navBar' className='z-50 flex flex-col [&>ul>li>a>div]:rounded-full [&>ul>li>a>div]:shadow-lg [&>ul>li>a>div]:m-2 [&>ul>li>a>div]:p-4 [&>ul>li>a>div:hover]:scale-110 [&>ul>li>a>div]:ease-in [&>ul>li>a>div]:duration-300'>
          <ul>
            <li>
              <a href='#main'>
                <div className={currentSection === 'main' ? 'bg-[#03396c] text-white' : 'bg-[#005b96]/30 dark:bg-white/30 text-black'}>
                  <MdPersonOutline size={25} />
                </div>
              </a>
            </li>
            <li>
              <a href='#career'>
                <div className={currentSection === 'career' ? 'bg-[#03396c] text-white' : 'bg-[#005b96]/30 dark:bg-white/30 text-black'}>
                  <MdWorkOutline  size={25} />
                </div>
              </a>
            </li>
            <li>
              <a href='#education'>
                <div className={currentSection === 'education' ? 'bg-[#03396c] text-white' : 'bg-[#005b96]/30 dark:bg-white/30 text-black'}>
                  <PiStudentFill  size={25} />
                </div>
              </a>
            </li>
            <li>
              <a href='#projects'>
                <div className={currentSection === 'projects' ? 'bg-[#03396c] text-white' : 'bg-[#005b96]/30 dark:bg-white/30 text-black'}>
                  <MdOutlineInsertChart size={25} />
                </div>
              </a>
            </li>
            <li>
              <a href='#contact'>
                <div className={currentSection === 'contact' ? 'bg-[#03396c] text-white' : 'bg-[#005b96]/30 dark:bg-white/30 text-black'}>
                  <MdMailOutline size={25} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  
}

export default Sidenav