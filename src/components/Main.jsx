import { TypeAnimation } from  'react-type-animation'
import { FaLinkedin, FaTelegram, FaHackerrank, FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import mainWaveDark from "../assets/images/backgrounds/mainWaveDark.svg"
import { useState, useEffect } from 'react'
import landscapeDay from '../assets/images/backgrounds/landscapeDay.png'
import landscapeNight from '../assets/images/backgrounds/landscapeNight.png'
import mainWaveLight from "../assets/images/backgrounds/mainWaveLight.svg"
import useLanguage from '../languageContext/useLanguage'
import useTheme from '../themeContext/useTheme'

const Main = () => {
  
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const [sequence, setSequence] = useState(()=>{
    if (language === 'es'){
      return ([
        'Developer',
        1000,
        'Sysadmin',
        1000
      ])
    } else {
      return ([
        'Developer',
        1000,
        'Sysadmin',
        1000
      ])
    }
  });

  useEffect(() => {
    if (language === 'es'){
      setSequence ([
        'Developer',
        1000,
        'Sysadmin',
        1000
      ])
    } else {
      setSequence ([
        'Developer',
        1000,
        'Sysadmin',
        1000
      ])
    }
  }, [language]);
  
  return(
    <section id='main'>
      <div className='flex items-center w-full h-screen flex-col'>
        <div className="absolute object-cover w-full h-full top-0 left-0 z-10 bg-[#F4F4F9]/20 dark:bg-[#000B11]/20"/>
        <img src=
        {
          isDarkMode ? (
            mainWaveDark
          )
          : (
            mainWaveLight
          )
        }
        alt="mainWaveDark" className='absolute top-0 left-0 w-full h-screen object-cover z-20' />
        <img
        className="top-0 left-0 w-full h-full object-cover"
        src=
        {
          isDarkMode ? (
            landscapeNight
          )
          : (
            landscapeDay
          )
        }
        alt="/"
        />
        <div className='absolute max-w-[700px] z-20 flex flex-col top-1/2 transform -translate-y-[90%]'>
          <h1 className='sm:text-5xl text-4xl font-bold dark:text-[#F4F4F9] dark:drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]'>Boris Sobreira Paleo</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 dark:text-[#F4F4F9] dark:drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]'>
            {language === 'es' ? 'Versátil' : 'Principal'}
            <TypeAnimation
              sequence={sequence}
              wrapper="div"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 w-full dark:text-[#F4F4F9] dark:drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)] hover:[&>a]:text-blue-800 hover:[&>a]:scale-150 [&>a]:ease-in [&>a]:duration-200'>
            <a href='https://www.linkedin.com/in/borissobreirapaleo/' target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} />
            </a>
            <a href='https://github.com/BoriSeven' target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
            <a href='https://t.me/SevenSie7e' target="_blank" rel="noopener noreferrer">
              <FaTelegram size={40} />
            </a>
            <a href='https://www.hackerrank.com/profile/borissobreirapa1' target="_blank" rel="noopener noreferrer">
              <FaHackerrank size={40} />
            </a>
            <a href='https://leetcode.com/BoriSeven/' target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={40}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
