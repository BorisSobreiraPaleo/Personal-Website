import ProjectItem from "./ProjectItem"
import useLanguage from "../../languageContext/useLanguage"
import useTheme from "../../themeContext/useTheme"
import enProjectsData from "../../assets/data/projects/enProjectsData"
import esProjectsData from "../../assets/data/projects/esProjectsData"

import { SiMongodb } from "react-icons/si"
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiEslint } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import { SiGnubash } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { SiMariadbfoundation } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiRailway } from "react-icons/si";
import { FaTelegram } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa";
import { SiApache } from "react-icons/si";
import { SiXampp } from "react-icons/si";
import { SiPowershell } from "react-icons/si";

import enLightPersonalWeb from '/src/assets/images/projects/enLightPersonalWeb.png';
import enDarkPersonalWeb from '/src/assets/images/projects/enDarkPersonalWeb.png';
import esLightPersonalWeb from '/src/assets/images/projects/esLightPersonalWeb.png';
import esDarkPersonalWeb from '/src/assets/images/projects/esDarkPersonalWeb.png';
import timelapseGenerator from '/src/assets/images/projects/timelapseGenerator.png'

const Projects = () => {
  const { language } = useLanguage()
  const { isDarkMode } = useTheme()

  const data = language === 'en' ? enProjectsData : esProjectsData

  const imageMap = {
    enLightPersonalWeb,
    enDarkPersonalWeb,
    esLightPersonalWeb,
    esDarkPersonalWeb,
    timelapseGenerator
  };

  return (
    <section id="projects" className="dark:bg-[#000B11]">
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 pt-16 dark:bg-[#000B11]">
        <a href='https://github.com/BoriSeven' target="_blank" rel="noopener noreferrer">
          <h1 className="text-4xl font-bold text-center text-[#000B11] dark:text-[#F4F4F9] hover:underline">{language === 'en' ? 'Projects' : 'Proyectos'}</h1>
        </a>
        <div className="grid sm:grid-cols-2 py-8 gap-12">
          {
            data.map(({id, imageLight, imageDark, title, details, url, techs})=>{
              return(
                <ProjectItem key={id} image={isDarkMode ? imageMap[imageDark] : imageMap[imageLight]} title={title} details={details} url={url} techs={techs} />
              )
              })
          }
        </div>
        <div className="flex flex-wrap items-center justify-center pt-5 [&>*]:m-1 dark:text-[#F4F4F9] text-[#000B11]">
          <FaHtml5 size={50}/>
          <FaCss3Alt size={50}/>
          <FaWordpress size={50}/>
          <FaBootstrap size={50}/>
          <SiJavascript size={50}/>
          <FaGit size={50}/>
          <FaGithub size={50}/>
          <FaNpm size={50}/>
          <FaReact size={50}/>
          <SiTailwindcss size={50}/>
          <SiVite size={50}/>
          <SiEslint size={50}/>
          <FaNodeJs size={50}/>
          <SiRailway size={50}/>
          <FaTelegram size={50}/>
          <FaPhp size={50}/>
          <SiPhpmyadmin size={50}/>
          <SiMysql size={50}/>
          <SiMariadbfoundation size={50}/>
          <SiMongodb size={50}/>
          <BsFiletypeJson size={50}/>
          <SiApache size={50}/>
          <SiXampp size={50}/>
          <SiGnubash size={50}/>
          <VscTerminalCmd size={50}/>
          <SiPowershell size={50}/>
        </div>
      </div>
    </section>
  )
}

export default Projects
