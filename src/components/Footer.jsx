import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaTelegram, FaHackerrank, FaGithub } from "react-icons/fa"
import footerWaveDark from "../assets/images/backgrounds/footerWaveDark.svg"
import footerWaveLight from "../assets/images/backgrounds/footerWaveLight.svg"
import useTheme from "../themeContext/useTheme";



const Footer = () => {
  const year = new Date().getFullYear();
  const { isDarkMode } = useTheme()

  return (
    <section id="footer">
      <div className="flex flex-col h-auto">
        <div className='w-full dark:bg-[#000B11] bg-[#b2cddf]'>
          <img src=
          {
          isDarkMode ? (
            footerWaveDark
          )
          : (
            footerWaveLight
          )
        }
        alt="mainWaveDark" className="h-7 w-full object-none object-bottom"/>
        </div>
        <div className="flex flex-wrap items-center justify-center text-center md:pr-20 [&>*]:m-1 w-full h-auto text-[#000B11] text-2xl dark:bg-[#4d5559] bg-[#b2cddf]">
          <div>
            <p> Boris Sobreira Paleo </p>
          </div>
          <div className="flex flex-wrap gap-1 items-center justify-center">
            <a href='https://www.linkedin.com/in/borissobreirapaleo/' target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30}/>
            </a>
            <a href='https://github.com/BoriSeven' target="_blank" rel="noopener noreferrer">
              <FaGithub size={30}/>
            </a>
            <a href='https://t.me/SevenSie7e' target="_blank" rel="noopener noreferrer">
              <FaTelegram size={30} />
            </a>
            <a href='https://www.hackerrank.com/profile/borissobreirapa1' target="_blank" rel="noopener noreferrer">
              <FaHackerrank size={30} />
            </a>
            <a href='https://leetcode.com/BoriSeven/' target="_blank" rel="noopener noreferrer">
              <SiLeetcode size={30} />
            </a>
          </div>
          <div>
            <p> {year} </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Footer